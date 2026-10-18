# HƯỚNG DẪN: WEB GAME THUYẾT TRÌNH HARRY POTTER (ENGLISH EDITION)
## (Harry Potter and the Game of Knowledge)

### 🌟 CÁC CẬP NHẬT MỚI NHẤT & FIX LỖI
1. **Khắc phục triệt để lỗi chữ đè logo ở Slide 3 (Rules) & Slide 2 (Letter):**
   - Ruy băng đáy của huy hiệu Hogwarts trong ảnh nền giấy da kéo dài đến $Y = 389\text{px}$.
   - Khối nội dung luật chơi được hạ xuống bắt đầu từ $Y = 415\text{px}$ (và thư nhập học từ $Y = 420\text{px}$), tạo khoảng đệm thoáng đãng, tuyệt đối không còn chạm hay đè lên huy hiệu.
2. **Tự động chuyển thẳng sang nhận thưởng khi trả lời đúng:**
   - Khi chọn đúng đáp án, hệ thống lập tức bật sáng đáp án xanh, hiện banner đáp án chuẩn, nổ pháo hoa phép thuật và **tự động chuyển thẳng sang minigame nhận thưởng** sau 1 giây mà không cần người thuyết trình phải ấn thủ công vào con dấu sáp xanh nữa.
3. **Hiệu ứng Slide hình phạt khi trả lời sai (Penalty Slides):**
   - Khi chọn sai đáp án, màn hình chuyển sang hiệu ứng **Slide hình phạt** với các cảnh GIF hoạt hình điện ảnh trích xuất trực tiếp từ bản thuyết trình PowerPoint:
     + *Bị gia đình Dursley bắt (image44.gif - Zero pts)*
     + *Thất bại trong cuộc quyết đấu phép thuật (image61.gif - Lose pts)*
     + *Voldemort và Tử thần Thực tử tấn công (image66.gif - Dark curse)*
     + *Hippogriff Buckbeak nổi giận (image94.gif - -1 pt)*
   - Hệ thống tự động trừ 1 điểm của đội đang chơi, thông báo hình phạt và tự động quay về Bảng câu hỏi đổi lượt sau 4 giây (hoặc bấm nút quay về ngay lập tức).
4. **Xóa bỏ hoàn toàn watermark:**
   - Xóa bỏ toàn bộ dòng chữ credit watermark trên giao diện và inpaint sạch sẽ ảnh nền lâu đài ban đầu ([image1.jpg](file:///c:/Users/camka/OneDrive/Desktop/web%20trò%20chơi%20thuyết%20trình/assets/image1.jpg)).
5. **Khôi phục đầy đủ 16 câu hỏi & Đáp án Câu 10 không bị che:**
   - Bảng 16 ô cho 4 nhà Hogwarts, Câu 16 đầy đủ từ vựng Silk Road ("Caravanserai").
   - Đáp án câu 10 ("Quasi-") hiển thị to rõ 72px không bị che khuất.

---

### 🚀 CÁCH KHỞI CHẠY WEB GAME
- **Cách 1 (Khuyên dùng):** Nhấp đúp chuột vào file `start_game.bat`. Game sẽ tự động mở trên trình duyệt tại địa chỉ:
  ```
  http://localhost:8000/index.html
  ```
- **Cách 2:** Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Safari).
