from PIL import Image, ImageFilter
import os, glob
from concurrent.futures import ProcessPoolExecutor, as_completed

input_folder = "frames"
output_folder = "frames_white_bg"

os.makedirs(output_folder, exist_ok=True)

def process_single_frame(path: str) -> str:
    with Image.open(path) as img:
        rgb_img = img.convert("RGB")
        w, h = rgb_img.size
        
        gray = rgb_img.convert("L")
        mask = gray.point(lambda p: 255 if p <= 22 else 0, mode="L")
        
        outer_mask = Image.new("L", (w, h), 0)
        mask_pixels = mask.load()
        outer_pixels = outer_mask.load()
        
        queue = []
        for x in range(w):
            if mask_pixels[x, 0] == 255 and outer_pixels[x, 0] == 0:
                outer_pixels[x, 0] = 255
                queue.append((x, 0))
            if mask_pixels[x, h - 1] == 255 and outer_pixels[x, h - 1] == 0:
                outer_pixels[x, h - 1] = 255
                queue.append((x, h - 1))
                
        for y in range(h):
            if mask_pixels[0, y] == 255 and outer_pixels[0, y] == 0:
                outer_pixels[0, y] = 255
                queue.append((0, y))
            if mask_pixels[w - 1, y] == 255 and outer_pixels[w - 1, y] == 0:
                outer_pixels[w - 1, y] = 255
                queue.append((w - 1, y))
                
        head = 0
        while head < len(queue):
            cx, cy = queue[head]
            head += 1
            for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < w and 0 <= ny < h:
                    if mask_pixels[nx, ny] == 255 and outer_pixels[nx, ny] == 0:
                        outer_pixels[nx, ny] = 255
                        queue.append((nx, ny))
                        
        outer_mask_blurred = outer_mask.filter(ImageFilter.GaussianBlur(radius=0.7))
        white_img = Image.new("RGB", (w, h), (255, 255, 255))
        
        result = Image.composite(white_img, rgb_img, outer_mask_blurred)
        
        base_name = os.path.splitext(os.path.basename(path))[0]
        out_path = os.path.join(output_folder, f"{base_name}.jpg")
        result.save(out_path, quality=95)
        return out_path

if __name__ == "__main__":
    image_files = sorted(
        glob.glob(os.path.join(input_folder, "*.jpg")) +
        glob.glob(os.path.join(input_folder, "*.png")) +
        glob.glob(os.path.join(input_folder, "*.jpeg"))
    )

    print(f"Starting parallel processing for {len(image_files)} frames...")

    with ProcessPoolExecutor() as executor:
        futures = [executor.submit(process_single_frame, path) for path in image_files]
        completed = 0
        for future in as_completed(futures):
            future.result()
            completed += 1
            if completed % 25 == 0 or completed == len(image_files):
                print(f"Completed {completed}/{len(image_files)} frames...")

    print("Done! All backgrounds converted to white.")