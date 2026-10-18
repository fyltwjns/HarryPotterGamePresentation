import zipfile
import os

with zipfile.ZipFile("LSGTDA.pptx", "r") as z:
    media = [f for f in z.namelist() if f.startswith("ppt/media/")]
    print(f"Total media files: {len(media)}")
    audio_files = [f for f in media if any(f.endswith(ext) for ext in ['.mp3', '.wav', '.m4a', '.wma', '.ogg'])]
    video_files = [f for f in media if any(f.endswith(ext) for ext in ['.mp4', '.avi', '.mov', '.wmv'])]
    gif_files = [f for f in media if f.endswith('.gif')]
    print("Audio files:", audio_files)
    print("Video files:", video_files)
    print("GIF files:", gif_files)
