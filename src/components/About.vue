<template>
  <div class="dm-about">
    <h1>About Dunder Mifflin</h1>
    <div>
      <iframe
        height="200px"
        src="https://www.youtube.com/embed/bV8i6oCgiAM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="dm-about-desc">
      <h1>
        Dunder Mifflin Inc. is a micro-cap regional paper and office supply
        distributor with an emphasis on servicing small-business clients.
      </h1>
    </div>
    <div class="dm-about-desc-para">
      <p>
        Dunder Mifflin Incorporated provides its customers quality office and
        information technology products, furniture, printing values and the
        expertise required for making informed buying decisions. We provide our
        products and services with a dedication to the highest degree of
        integrity and quality of customer satisfaction, developing long-term
        professional relationships with employees that develop pride, creating a
        stable working environment and company spirit.
      </p>
    </div>

    <div class="dm-about-slider">
      <VueSlickCarousel
        ref="c1"
        :infinite="false"
        :centerMode="true"
        centerPadding="2px"
        :slidesToShow="1"
        :slidesToScroll="1"
      >
        <template #prevArrow>
          <div class="custom-arrow"><i class="fas fa-chevron-left"></i></div>
        </template>
        <template #nextArrow>
          <div class="custom-arrow"><i class="fas fa-chevron-right"></i></div>
        </template>
        <div class="dm-about-slider-data">
          <h4>Growth</h4>
          <p>
            We crusade to create a stable working environment and corporate
            spirit and to give unlimited opportunity to everyone, and to afford
            ordinary folk the chance to buy the same things as rich people. We
            are also committed to nurturing and promulgating wholesome American
            values.
          </p>
        </div>
        <div class="dm-about-slider-data">
          <h4>Quality</h4>
          <p>
            Dunder Mifflin, Inc. is committed to providing its customers quality
            office and information technology products, furniture, printing
            values and the experience required for making informed buyer
            decisions.
          </p>
        </div>
        <div class="dm-about-slider-data">
          <h4>Innovation</h4>
          <p>
            We strive to become the company most known for changing the
            worldwide poor–quality image of paper products.
          </p>
        </div>
        <div class="dm-about-slider-data">
          <h4>People first</h4>
          <p>
            We provide our Customers with the highest standard of integrity and
            quality, to enable them to develop long-term professional
            relationships with our employees and staff.
          </p>
        </div>
      </VueSlickCarousel>
    </div>

    <div>
      <div class="dm-about-all-details">
        <div class="dm-about-details">
          <div class="dm-about-details-title">Website</div>
          <div>
            <a href="https://www.peacocktv.com/stream-tv/the-office"
              >https://www.peacocktv.com/stream-tv/the-office</a
            >
          </div>
        </div>
        <div class="dm-about-details">
          <div class="dm-about-details-title">Headquarters</div>
          <div>Scranton, PA</div>
        </div>
        <div class="dm-about-details">
          <div class="dm-about-details-title">Company Size</div>
          <div>50-99</div>
        </div>
        <div class="dm-about-details">
          <div class="dm-about-details-title">Total Funding</div>
          <div>$20M</div>
        </div>
        <div class="dm-about-details">
          <div class="dm-about-details-title">Last Funding Type</div>
          <div>Series B</div>
        </div>
      </div>
      <div class="dm-about-more-details">
        <div class="dm-about-more-details-data">
          <div class="dm-about-more-details-data-title">Investors</div>
          <div class="dm-about-more-details-data-link">
            <a
              href="https://theoffice.fandom.com/wiki/The_Michael_Scott_Paper_Company"
              >Vance Refrigeration, The Michael Scott Paper Company, Sabre
              International, Athleap</a
            >
          </div>
        </div>
        <div class="dm-about-more-details-data">
          <div class="dm-about-more-details-data-title">Leadership</div>
          <div>
            David Wallace (CEO), Michael Scott (Regional Manager), Jan Levinson
            (VP Sales), Jim Halpert (Sales Manager), Pamela Beesly (Head of
            Communications)
          </div>
        </div>
      </div>
    </div>

    <!-- News section -->
    <section>
      <div><h2>In the news</h2></div>

      <div class="dm-about-news">
        <VueSlickCarousel
          ref="c2"
          :centerMode="true"
          centerPadding="2px"
          :slidesToShow="1"
          :slidesToScroll="1"
        >
          <template #prevArrow>
            <div class="custom-arrow-news">
              <i class="fas fa-chevron-left"></i>
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow-news">
              <i class="fas fa-chevron-right"></i>
            </div>
          </template>
          <div class="dm-about-news-card">
            <div>
              <img
                src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/11/The-Office-5-Ways-Dunder-Miffin-Is-A-Great-Place-To-Work-5-Ways-Its-The-Worst.jpg"
                alt=""
                height="125px"
                width="125px"
              />
            </div>
            <div>
              <p>
                The Office: 5 Ways Dunder Mifflin Is A Great Place To Work
                (&amp; 5 Ways It's The Worst)
              </p>
            </div>
          </div>
          <div class="dm-about-news-card">
            <div>
              <img
                src="https://www.officequotes.net/wp-content/uploads/2020/03/CreedThoughts-300x43.jpg"
                alt=""
                height="125px"
                width="125px"
              />
            </div>
            <div>
              <p>Creed Thoughts #1 - OfficeQuotes.net</p>
            </div>
          </div>
          <div class="dm-about-news-card">
            <div>
              <img
                src="https://media.architecturaldigest.com/photos/5e724ec1f171de0008f09f2f/16:9/w_1280,c_limit/GettyImages-138446688.jpg"
                alt=""
                height="125px"
                width="125px"
              />
            </div>
            <div>
              <p>
                How the Remarkably Unremarkable World of Dunder Mifflin Was
                Built for "The Office" | Architectural Digest
              </p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "About",
  components: { VueSlickCarousel },
};
</script>

<style scoped>
.dm-about h1 {
  margin-top: 30px;
  text-align: left;
}
.dm-about-desc {
  border-left: 4px solid rgb(129, 129, 247);
  text-align: left;
  padding-left: 32px;
}
.dm-about-slider {
  margin-top: 80px;
}
.dm-about-slide-icon {
  border: 1px solid #ccc;
}
/* .dm-about-slider-data {
  border: 1px solid #ccc;
  border-radius: 4px;
} */
.dm-about-news-card {
  display: flex !important;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 25px;
}
.dm-about-news-card img {
  border-radius: 8px;
}

/* ::v-deep .slick-slide {
 
} */
.dm-about-slider-data {
  text-align: left;
  border-radius: 8px !important;
  border: 1px solid #ddd !important;
  height: 100%;
  width: 100%;

  /* padding: 10px; */
}
.dm-about-slider-data h4,
.dm-about-slider-data p {
  padding: 0 10px;
}

button.slick-arrow.slick-next {
  right: 0 !important;
}
.dm-about-all-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  margin: 24px 0;
}
.dm-about-details {
  padding: 12px;
  width: 43%;
  font-weight: 500;
}
.dm-about-details a {
  text-decoration: none;
  word-break: break-word;
  color: #0b5656;
}

.dm-about-more-details-data {
  text-align: left;
  margin: 24px 0;
  font-weight: 500;
}
.dm-about-more-details-data-link a {
  color: #0b5656;
  text-decoration: none;
  font-weight: 500;
}
.dm-about-details-title {
  color: #8d8d8d;
}
.dm-about-more-details-data-title {
  color: #8d8d8d;
}
.dm-about-desc,
.dm-about-desc h1 {
  font-weight: 500;
  font-size: 2rem;
}
.dm-about-desc-para {
  text-align: left;
}

.slick-prev:before,
.slick-next:before {
  content: "";
}

.slick-prev i,
.slick-next i {
  font-size: 1rem;
  color: black;
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
}

.slick-next {
  right: auto;
  left: 40px;
  top: -50px;
}
.slick-prev {
  left: 0;
  top: -50px;
}

custom-arrow-news.slick-next {
  right: 0;
  /* left: 40px; */
  top: 0;
}
custom-arrow-news.slick-prev {
  right: 0;
  top: -50px;
}
iframe {
  width: 100%;
}

dm-about-news > vue-slick-carousel {
  margin-right: 20px;
}
.dm-about-news-card p {
  font-weight: bold;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

@media (min-width: 768px) {
  .dm-about {
    padding: 36px 48px;
  }
  .dm-about-slider {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, minmax(240px, 2fr));
  }
  .dm-about-more-details {
    display: flex;
    padding: 0 12px 0;
  }
  .dm-about-news {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, minmax(240px, 2fr));
  }
}

@media (min-width: 1024px) {
  .dm-about-all-details {
    flex-wrap: nowrap;
  }
}
</style>





