export default function About() {
  return (
    <main class="main">
      <div
        class="page-header page-header-bg"
        style={{
          backgroundImage: "url('assets/images/banners/banner-top.jpg')",
        }}
      >
        <div class="container">
          <h1>About Us</h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
      </nav>

      <div class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h2 class="subtitle">OUR HISTORY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus a eros in venenatis. Cras mauris arcu, suscipit id
                lacinia sed, pulvinar in urna. Donec urna nisi, efficitur
                fermentum ullamcorper non, mattis et est. Nullam malesuada leo
                leo, non tempus turpis accumsan a. Sed tincidunt feugiat purus,
                sed lobortis justo consequat in. Phasellus lectus magna,
                accumsan eget felis in, hendrerit malesuada lectus. Duis orci
                nunc, vulputate vel sapien nec, sodales sollicitudin ligula.
              </p>
            </div>

            <div class="col-lg-5">
              <h2 class="subtitle">CLIENT REVIEWS</h2>

              <div class="testimonials-slider owl-carousel owl-theme">
                <div class="testimonial">
                  <div class="testimonial-owner">
                    <figure>
                      <img
                        src="assets/images/clients/client1.png"
                        alt="client"
                      />
                    </figure>

                    <div>
                      <h4 class="testimonial-title">john Smith</h4>
                      <span>Proto Co Ceo</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elitad adipiscing
                      Cras non placerat mipsum dolor sit amet, consectetur
                      elitad adipiscing.
                    </p>
                  </blockquote>
                </div>
                <div class="testimonial">
                  <div class="testimonial-owner">
                    <figure>
                      <img
                        src="assets/images/clients/client2.png"
                        alt="client"
                      />
                    </figure>

                    <div>
                      <h4 class="testimonial-title">Bob Smith</h4>
                      <span>Proto Co Ceo</span>
                    </div>
                  </div>

                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elitad adipiscing
                      Cras non placerat mipsum dolor sit amet, consectetur
                      elitad adipiscing.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-section popup-gallery">
        <div class="container">
          <h2 class="subtitle">PHOTO GALLERY</h2>
          <div
            class="owl-carousel owl-theme text-center"
            data-toggle="owl"
            data-owl-options="{
                    'dots': true,
                    'margin': 20,
                    'responsive': {
                        '0': {
                            'items': 1
                        },
                        '500': {
                            'items': 2
                        },
                        '768': {
                            'items': 3
                        },
                        '992': {
                            'items': 4
                        }
                    }
                }"
          >
            <a href="assets/images/about/gallery1.jpg" class="gallery-item">
              <img src="assets/images/about/gallery1.jpg" alt="gallery image" />
            </a>
            <a href="assets/images/about/gallery2.jpg" class="gallery-item">
              <img src="assets/images/about/gallery2.jpg" alt="gallery image" />
            </a>
            <a href="assets/images/about/gallery3.jpg" class="gallery-item">
              <img src="assets/images/about/gallery3.jpg" alt="gallery image" />
            </a>
            <a href="assets/images/about/gallery4.jpg" class="gallery-item">
              <img src="assets/images/about/gallery4.jpg" alt="gallery image" />
            </a>
          </div>
        </div>
      </div>

      <div class="company-section">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-md-6">
              <img src="assets/images/about/img-1.jpg" alt="image" />
            </div>

            <div class="col-md-6 padding-left-lg">
              <h3 class="subtitle">OUR MISSION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>

              <h3 class="subtitle">OUR VISION</h3>
              <p>
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only look now.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="features-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="feature-box">
                <i class="icon-shipped"></i>

                <div class="feature-box-content">
                  <h3>FREE SHIPPING</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="feature-box">
                <i class="icon-us-dollar"></i>

                <div class="feature-box-content">
                  <h3>100% MONEY BACK GUARANTEE</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="feature-box">
                <i class="icon-online-support"></i>

                <div class="feature-box-content">
                  <h3>ONLINE SUPPORT 24/7</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
