import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div>
        <main id="main">
          <section id="services" className="services">
            {/* End Skills Section */}

            <div>
              <div>
                <section id="laps" className=" sect-pt4 route">
                  <div className="container">
                    <div className="col-sm-12" style={{ marginTop: "50px" }}>
                      <div className="box-shadow-full">
                        <div className="section-title">
                          <h2>Result</h2>
                        </div>
                        <br />
                        <ul className="nav nav-tabs ">
                          <li className="nav-item">
                            <a
                              href="#requirement"
                              className="nav-link active"
                              data-toggle="tab"
                            >
                              Bài học tích lũy
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#design"
                              className="nav-link"
                              data-toggle="tab"
                            >
                              Đánh giá{" "}
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content text-left">
                          <div className="tab-pane active" id="requirement">
                            <div className="mt-3 mb-2">
                              <h3 className="text-secondary">
                                Nội dung kiến thức
                              </h3>
                            </div>
                            <ol>
                              <li>
                                Được tìm hiểu và áp dụng các kiến thức và kỷ
                                năng về HTML, CSS, Bootstrap, Javascript.
                              </li>
                              <li>
                                Đảm bảo được các nguyên tắc khi thiết kế một
                                trang web.{" "}
                              </li>
                              <li>
                                {" "}
                                Hạn chế tối đa các lỗi: font chữ, màu sắc,
                                khoảng trắng,...{" "}
                              </li>
                              <li>
                                {" "}
                                Thiết kế được giao diện đúng yêu cầu, dễ nhìn,
                                dễ sử dụng, màu sắc hài hòa,...{" "}
                              </li>
                            </ol>
                            <div className="mt-3 mb-2">
                              <h3 className="text-secondary">
                                Kỹ năng làm việc nhóm hiệu quả
                              </h3>
                              <ol>
                                <li>
                                  Cách phân chia công việc và giải quyết mâu
                                  thuẫn.
                                </li>
                                <li>
                                  Biết lắng nghe và phát biểu để học hỏi và chia
                                  sẻ kiến thức.{" "}
                                </li>
                                <li>Cách ứng xử với mọi người.</li>
                              </ol>
                            </div>
                            <div className="mt-3 mb-2">
                              <h3 className="text-secondary">
                                Kỹ năng lắng nghe và giải quyết yêu cầu
                              </h3>
                              <ol>
                                <li>
                                  Lắng nghe những nhận xét, chỉnh sửa của giáo
                                  viên và đáp ứng yêu cầu.
                                </li>
                                <li>
                                  Đưa ra những gợi ý giải quyết về vấn đề có thể
                                  phát sinh cho khách hàng từ yêu cầu của họ.{" "}
                                </li>
                                <li>
                                  Có khả năng tìm kiếm những giải pháp để giải
                                  quyết những vấn đề khó khăn trong dự án.{" "}
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="tab-pane" id="design">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                              <li class="nav-item">
                                <a
                                  class="nav-link active"
                                  id="home-tab"
                                  data-toggle="tab"
                                  href="#home"
                                  role="tab"
                                  aria-controls="home"
                                  aria-selected="true"
                                >
                                  Cá nhân
                                </a>
                              </li>
                              <li class="nav-item">
                                <a
                                  class="nav-link"
                                  id="profile-tab"
                                  data-toggle="tab"
                                  href="#profile"
                                  role="tab"
                                  aria-controls="profile"
                                  aria-selected="false"
                                >
                                  Nhóm
                                </a>
                              </li>
                              {/* <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li> */}
                            </ul>
                            <div class="tab-content" id="myTabContent">
                              <div
                                class="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                              >
                                <h3
                                  className="text-secondary"
                                  style={{ paddingTop: "10px" }}
                                >
                                  Bài tập
                                </h3>
                                <ol>
                                  <li>Hoàn thành các bài tập mỗi tuần</li>
                                  <li>
                                    Công khai lên mạng qua firebase hosting
                                  </li>
                                  <li>Sử dụng react js</li>
                                </ol>
                                <h3 className="text-secondary">Web cá nhân</h3>
                                <ol>
                                  <li>
                                    {" "}
                                    Thiết kế giao diện đơn giản, dễ sử dụng
                                  </li>

                                  <li>
                                    Đảm bảo được các nguyên tắc khi thiết kế một
                                    trang web.s
                                  </li>

                                  <li>
                                    Có kiến thức HTML, CSS cơ bản để chỉnh sửa
                                    template
                                  </li>
                                </ol>
                                <h3 className="text-secondary">Đánh giá</h3>
                                <span></span>
                                <h3 className="text-secondary">
                                  <b>
                                    <a href="http://dnthai.tk/">
                                      Hoàn thành: 100%
                                    </a>
                                  </b>
                                </h3>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <h3
                                  className="text-secondary"
                                  style={{ paddingTop: "10px" }}
                                >
                                  Project
                                </h3>
                                <ol>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/BlogArticle"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Blog Article
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/SignIn"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      SignIn
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/ForgotPass"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Forgot Pass
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/Product"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Product
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/Cart"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/SignIn"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      SignIn
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/Checkout"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Checkout
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/Store"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Store
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://projecthci07.tk/Catalog"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Catalog
                                    </a>
                                  </li>
                                </ol>
                                <h3 className="text-secondary">Web nhóm</h3>
                                <ol>
                                  <li>
                                    <a
                                      href="https://hci2021group007.tk/"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Home
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://hci2021group007.tk/Project"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Project
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://hci2021group007.tk/Result"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Result
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://hci2021group007.tk/StyleGuide"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Style Guide
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://hci2021group007.tk/Diary"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      Group Diary
                                    </a>
                                  </li>
                                </ol>
                                <h3 className="text-secondary">Đánh giá</h3>
                                <span></span>
                                <h3 className="text-secondary">
                                  <b>
                                    <a
                                      href="http://projecthci07.tk/"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Hoàn thành: 100%
                                    </a>
                                  </b>
                                </h3>
                              </div>
                              {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div>
              <a href="#" className="back-to-top" style={{ display: "none" }}>
                <i className="fa fa-chevron-up" aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="skills" className="skills"></section>

          {/* End Services Section */}
        </main>
      </div>
    );
  }
}
