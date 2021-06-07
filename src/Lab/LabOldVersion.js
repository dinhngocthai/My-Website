import React, { Component } from "react";
export default class Lab extends Component {
  render() {
    return (
      <div>
      <main id="main">
       <section id="services" className="services">
         <section id="skills" className="skills"></section>
         {/* End Skills Section */}
         <h3>Lab</h3>
         <p><em>Click on each option</em></p>
         <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link" id="nav-lab1-tab" data-toggle="tab" href="#nav-lab1" role="tab" aria-controls="nav-lab1" aria-selected="true">Lab1</a>
            <a class="nav-item nav-link" id="nav-lab2-tab" data-toggle="tab" href="#nav-lab2" role="tab" aria-controls="nav-lab2" aria-selected="false">Lab2</a>
            <a class="nav-item nav-link" id="nav-lab3-tab" data-toggle="tab" href="#nav-lab3" role="tab" aria-controls="nav-lab3" aria-selected="false">Lab3</a>
            <a class="nav-item nav-link" id="nav-lab4-tab" data-toggle="tab" href="#nav-lab4" role="tab" aria-controls="nav-lab4" aria-selected="false">Lab4</a>
            <a class="nav-item nav-link" id="nav-lab5-tab" data-toggle="tab" href="#nav-lab5" role="tab" aria-controls="nav-lab5" aria-selected="false">Lab5</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">

          <div class="tab-pane fade" id="nav-lab1" role="tabpanel" aria-labelledby="nav-lab1-tab">
          <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-requirement-lab1-tab" data-toggle="tab" href="#nav-requirement-lab1" role="tab" aria-controls="nav-requirement-lab1" aria-selected="true">Requirement</a>
                <a class="nav-item nav-link" id="nav-design-lab1-tab" data-toggle="tab" href="#nav-design-lab1" role="tab" aria-controls="nav-design-lab1" aria-selected="false">Design</a>
                <a class="nav-item nav-link" id="nav-implement-lab1-tab" data-toggle="tab" href="#nav-implement-lab1" role="tab" aria-controls="nav-implement-lab1" aria-selected="false">Implement</a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-requirement-lab1" role="tabpanel" aria-labelledby="nav-requirement-lab1-tab">
              <h3>Requirement: </h3>
          <p>Chọn 1 đối tượng bất kỳ trong thế giới thực, <br />Ví dụ như
            lớp môn học, giảng viên,... Sau đó thiết kế chức năng Quản lý đối
            tượng đó trên html bao gồm các tính năng thêm, sửa, xóa, tìm
            kiếm cho đối tượng đó. <br />Ví dụ, làm chức năng Quản lý Sinh viên,
            bao gôm tính năng thêm, sửa, xóa, tìm kiếm. Chú ý: Các thành
            viên trong nhóm không được chọn các đối tượng giống nhau.</p>
              </div>
              <div class="tab-pane fade" id="nav-design-lab1" role="tabpanel" aria-labelledby="nav-design-lab1-tab">
                <h3>Design:</h3>
                <p><em> User scenario: </em></p>
                ===================================================================================
                <br />
                  <p>Tìm trang tạo profile trên trang tìm việc.</p>
                  <p>Tìm profile phù hợp và thiết kế </p>
                  <p>Thiết kế profile cá nhân. </p>
                  <p>Hoàn thành </p>
                  <img src="assets/img/design.jpg" />
                
              </div>
              <div class="tab-pane fade" id="nav-implement-lab1" role="tabpanel" aria-labelledby="nav-implement-lab1-tab">
              <h3>Implement:</h3>
                    <p><a href="Lab1.html" target="_blank">Quản lý sinh viên</a></p>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="nav-lab2" role="tabpanel" aria-labelledby="nav-lab2-tab">
          <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-requirement-lab2-tab" data-toggle="tab" href="#nav-requirement-lab2" role="tab" aria-controls="nav-requirement-lab2" aria-selected="true">Requirement</a>
                <a class="nav-item nav-link" id="nav-design-lab2-tab" data-toggle="tab" href="#nav-design-lab2" role="tab" aria-controls="nav-design-lab2" aria-selected="false">Design</a>
                <a class="nav-item nav-link" id="nav-implement-lab2-tab" data-toggle="tab" href="#nav-implement-lab2" role="tab" aria-controls="nav-implement-lab2" aria-selected="false">Implement</a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-requirement-lab2" role="tabpanel" aria-labelledby="nav-requirement-lab2-tab">
              <h3>Requirement:</h3>
          <p>
            (1) Tạo ra một user scenario<br />
            (2) Chọn 1 bước trong user scenario để thiết kế 1 form giao diện Web
            trên công cụ thiết kế đã chọn. Sau đó tạo ra file html tương ứng cho
            thiết kế này.<br />
            Upload lên Azure / github: trong file html có chèn hình ảnh của user
            scenario ở (1) và đường dẫn của file thiết kế ở (2).
          </p>
              </div>
              <div class="tab-pane fade" id="nav-design-lab2" role="tabpanel" aria-labelledby="nav-design-lab2-tab">
              <h3>Design:</h3>
          <p><em> User scenario: </em></p>
          ===================================================================================
          <br />
          <p>Tìm trang tạo profile trên trang tìm việc.</p>
          <p>Tìm profile phù hợp và thiết kế </p>
          <p>Thiết kế profile cá nhân. </p>
          <p>Hoàn thành </p>
        
          <img style={{ width: "30px"}} src="assets/img/2.jpg"/>
          <img src="img/team/2.jpg" className="img-responsive" alt="img" />

              </div>

              <div class="tab-pane fade" id="nav-implement-lab2" role="tabpanel" aria-labelledby="nav-implement-lab2-tab">
              <h3>Implement:</h3>
                <p><a href="Lab2.html" target="_blank">Profile</a></p>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="nav-lab3" role="tabpanel" aria-labelledby="nav-lab3-tab">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-requirement-lab3-tab" data-toggle="tab" href="#nav-requirement-lab3" role="tab" aria-controls="nav-requirement-lab3" aria-selected="true">Requirement</a>
              <a class="nav-item nav-link" id="nav-design-lab3-tab" data-toggle="tab" href="#nav-design-lab3" role="tab" aria-controls="nav-design-lab3" aria-selected="false">Z-pattern</a>
              <a class="nav-item nav-link" id="nav-implement-lab3-tab" data-toggle="tab" href="#nav-implement-lab3" role="tab" aria-controls="nav-implement-lab3" aria-selected="false">F-pattern</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-requirement-lab3" role="tabpanel" aria-labelledby="nav-requirement-lab3-tab">
            <h3>Requirement:</h3>
        <p>
          Trong menu Labs, tạo 1 menu Lab3 (file lab3.html) sau đó tạo 2 tab
          Ex1,Ex2 <br />
        </p><li>
          Ex1: Thiết kế một trang Web đơn giản sử dụng mẫu F-pattern ==&gt; chuyển
          sang html (ex1.html)<br />
        </li>
        <li>
          Ex2: Thiết kế một trang Web sử dụng mẫu Z-pattern ==&gt; chuyển sang html
          (ex2.html)<br />
        </li>
        Với cả Ex1, Ex2: Tạo 2 tab Design và Implementation:
        <li>
          Design: chụp lại hình ảnh để có cái nhìn tổng quan về file thiết kế,
          có nút Download để download file thiết kế về nếu muốn.
        </li>
        <li>Implementation: nội dung phần hiện thực trên html.</li>
        <br></br>

        <p>Link</p>
        <p><a href="Lab3Ex1.html" target="_blank">Z-Patten</a></p> 

        <p><a href="Lab3Ex2.html" target="_blank">F-Patten</a></p> 
        <p />
            </div>
            <div class="tab-pane fade" id="nav-design-lab3" role="tabpanel" aria-labelledby="nav-design-lab3-tab">
            <h3>Design:Z-Patten</h3>
            <img src="assets/img/3-1.jpg" />
            <img src="assets/img/z-pattern.jpg" />

            <br></br>

            </div>

            <div class="tab-pane fade" id="nav-implement-lab3" role="tabpanel" aria-labelledby="nav-implement-lab3-tab">
            <h3>Design:F-Patten</h3>
            <img src="assets/img/3-2.jpg" />
            <img src="assets/img/f-pattern.jpg" />

              <br></br>

                
            </div>
          </div>
          </div>

          <div class="tab-pane fade" id="nav-lab4" role="tabpanel" aria-labelledby="nav-lab4-tab">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-requirement-lab4-tab" data-toggle="tab" href="#nav-requirement-lab4" role="tab" aria-controls="nav-requirement-lab4" aria-selected="true">Requirement</a>
              <a class="nav-item nav-link" id="nav-design-lab4-tab" data-toggle="tab" href="#nav-design-lab4" role="tab" aria-controls="nav-design-lab4" aria-selected="false">Design</a>
              <a class="nav-item nav-link" id="nav-implement-lab4-tab" data-toggle="tab" href="#nav-implement-lab4" role="tab" aria-controls="nav-implement-lab4" aria-selected="false">Implement</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-requirement-lab4" role="tabpanel" aria-labelledby="nav-requirement-lab4-tab">
            <h3>Requirement:</h3>
              <p>Tạo một trang Web có nội dung bất kỳ, sử dụng linh hoạt tất cả những phần sau: <b>Input Controls, Navigation, Animations, Default Settings, Guided Actions.</b></p>
              <p>Có biểu mẫu liên hệ.</p>
            </div>
            <div class="tab-pane fade" id="nav-design-lab4" role="tabpanel" aria-labelledby="nav-design-lab4-tab">
                <h3>Design: </h3>
                <img src="assets/img/lab4.jpg" />
                <img src="assets/img/lab4.png" />

            </div>

            <div class="tab-pane fade" id="nav-implement-lab4" role="tabpanel" aria-labelledby="nav-implement-lab4-tab">
            <h3>Implement: </h3>

            <p><a href="Lab4.html" target="_blank">The Band</a></p>
            </div>
          </div>
            
          </div>

          <div class="tab-pane fade" id="nav-lab5" role="tabpanel" aria-labelledby="nav-lab5-tab">
            <p><a href="#" target="_blank">Result</a></p>
          </div>
        </div>
       </section>
  
       <section id="skill" className="skill">
            </section> 
       <section id="skill" className="skill">
            </section>
            <section id="skills" className="skills"></section>
            <section id="skills" className="skills"></section>

       {/* End Services Section */}
     </main>
         </div>
    );
  }
}
