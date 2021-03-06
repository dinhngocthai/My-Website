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
          <p>Ch???n 1 ?????i t?????ng b???t k??? trong th??? gi???i th???c, <br />V?? d??? nh??
            l???p m??n h???c, gi???ng vi??n,... Sau ???? thi???t k??? ch???c n??ng Qu???n l?? ?????i
            t?????ng ???? tr??n html bao g???m c??c t??nh n??ng th??m, s???a, x??a, t??m
            ki???m cho ?????i t?????ng ????. <br />V?? d???, l??m ch???c n??ng Qu???n l?? Sinh vi??n,
            bao g??m t??nh n??ng th??m, s???a, x??a, t??m ki???m. Ch?? ??: C??c th??nh
            vi??n trong nh??m kh??ng ???????c ch???n c??c ?????i t?????ng gi???ng nhau.</p>
              </div>
              <div class="tab-pane fade" id="nav-design-lab1" role="tabpanel" aria-labelledby="nav-design-lab1-tab">
                <h3>Design:</h3>
                <p><em> User scenario: </em></p>
                ===================================================================================
                <br />
                  <p>T??m trang t???o profile tr??n trang t??m vi???c.</p>
                  <p>T??m profile ph?? h???p v?? thi???t k??? </p>
                  <p>Thi???t k??? profile c?? nh??n. </p>
                  <p>Ho??n th??nh </p>
                  <img src="assets/img/design.jpg" />
                
              </div>
              <div class="tab-pane fade" id="nav-implement-lab1" role="tabpanel" aria-labelledby="nav-implement-lab1-tab">
              <h3>Implement:</h3>
                    <p><a href="Lab1.html" target="_blank">Qu???n l?? sinh vi??n</a></p>
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
            (1) T???o ra m???t user scenario<br />
            (2) Ch???n 1 b?????c trong user scenario ????? thi???t k??? 1 form giao di???n Web
            tr??n c??ng c??? thi???t k??? ???? ch???n. Sau ???? t???o ra file html t????ng ???ng cho
            thi???t k??? n??y.<br />
            Upload l??n Azure / github: trong file html c?? ch??n h??nh ???nh c???a user
            scenario ??? (1) v?? ???????ng d???n c???a file thi???t k??? ??? (2).
          </p>
              </div>
              <div class="tab-pane fade" id="nav-design-lab2" role="tabpanel" aria-labelledby="nav-design-lab2-tab">
              <h3>Design:</h3>
          <p><em> User scenario: </em></p>
          ===================================================================================
          <br />
          <p>T??m trang t???o profile tr??n trang t??m vi???c.</p>
          <p>T??m profile ph?? h???p v?? thi???t k??? </p>
          <p>Thi???t k??? profile c?? nh??n. </p>
          <p>Ho??n th??nh </p>
        
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
          Trong menu Labs, t???o 1 menu Lab3 (file lab3.html) sau ???? t???o 2 tab
          Ex1,Ex2 <br />
        </p><li>
          Ex1: Thi???t k??? m???t trang Web ????n gi???n s??? d???ng m???u F-pattern ==&gt; chuy???n
          sang html (ex1.html)<br />
        </li>
        <li>
          Ex2: Thi???t k??? m???t trang Web s??? d???ng m???u Z-pattern ==&gt; chuy???n sang html
          (ex2.html)<br />
        </li>
        V???i c??? Ex1, Ex2: T???o 2 tab Design v?? Implementation:
        <li>
          Design: ch???p l???i h??nh ???nh ????? c?? c??i nh??n t???ng quan v??? file thi???t k???,
          c?? n??t Download ????? download file thi???t k??? v??? n???u mu???n.
        </li>
        <li>Implementation: n???i dung ph???n hi???n th???c tr??n html.</li>
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
              <p>T???o m???t trang Web c?? n???i dung b???t k???, s??? d???ng linh ho???t t???t c??? nh???ng ph???n sau: <b>Input Controls, Navigation, Animations, Default Settings, Guided Actions.</b></p>
              <p>C?? bi???u m???u li??n h???.</p>
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
