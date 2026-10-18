import zipfile
import os

zip_path = "LSGTDA.pptx"
assets_dir = "assets"
os.makedirs(assets_dir, exist_ok=True)

with zipfile.ZipFile(zip_path, "r") as z:
    for filename in z.namelist():
        if filename.startswith("ppt/media/"):
            base_name = os.path.basename(filename)
            target_path = os.path.join(assets_dir, base_name)
            with open(target_path, "wb") as f:
                f.write(z.read(filename))

print(f"Extracted {len(os.listdir(assets_dir))} media files to {assets_dir}!")
