import React, { Component } from 'react'

export default class lab3 extends Component {
    render() {
        return (
            <div>
         <main id="main">
          <section id="services" className="services">
            <section id="skills" className="skills"></section>
            {/* End Skills Section */}
            <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-requirement-lab3-tab" data-toggle="tab" href="#nav-requirement-lab3" role="tab" aria-controls="nav-requirement-lab3" aria-selected="true">Requirement</a>
              <a class="nav-item nav-link" id="nav-design-lab3-tab" data-toggle="tab" href="#nav-design-lab3" role="tab" aria-controls="nav-design-lab3" aria-selected="false">Design</a>
              <a class="nav-item nav-link" id="nav-implement-lab3-tab" data-toggle="tab" href="#nav-implement-lab3" role="tab" aria-controls="nav-implement-lab3" aria-selected="false">Implement</a>
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
        <p />
            </div>
            <div class="tab-pane fade" id="nav-design-lab3" role="tabpanel" aria-labelledby="nav-design-lab3-tab">
            <h3>Design:Z-Patten</h3>
              <img src="./images/ex1design2.PNG" />
              <img src="./images/ex1design2.PNG" />
            <br></br>
            <h3>Implement: Z-Patten</h3>
                <p><a href="Lab3Ex1.html">Z-Patten</a></p>
      
            </div>

            <div class="tab-pane fade" id="nav-implement-lab3" role="tabpanel" aria-labelledby="nav-implement-lab3-tab">
            <h3>Design:F-Patten</h3>
              <img src="./images/ex2design2.PNG" />
              <img src="./images/ex2design2.PNG" />
              <br></br>
            <h3>Implement: F-Patten</h3>

                <p><a href="Lab3Ex2.html">F-Patten</a></p> 
                
                            </div>
          </div>
          </section>
          {/* End Services Section */}
        </main>
            </div>
        )
    }
}
