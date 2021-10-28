<template>
  <div class="dm-about">
    <h1>About Dunder Mifflin</h1>
    <div>
      <video width="377" height="200" controls>
        <source src="https://www.youtube.com/watch?v=bV8i6oCgiAM" />
        Can't load the video.
      </video>
    </div>
    <div class="dm-about-desc">
      <h1>
        Dunder Mifflin Inc. is a micro-cap regional paper and office supply
        distributor with an emphasis on servicing small-business clients.
      </h1>
    </div>
    <div>
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
      <div>
        <span class="dm-about-slide-icon">
          <i class="fas fa-chevron-left"></i
        ></span>
        <span class="dm-about-slide-icon">
          <i class="fas fa-chevron-right"></i
        ></span>
      </div>
      <div>
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
      </div>
      <div class="dm-about-all-details">
        <div>
          <div class="dm-about-details">
            <div>Website</div>
            <div>https://www.peacocktv.com/stream-tv/the-office</div>
          </div>
          <div class="dm-about-details">
            <div>Headquarters</div>
            <div>Scranton, PA</div>
          </div>
          <div class="dm-about-details">
            <div>Company Size</div>
            <div>50-99</div>
          </div>
          <div class="dm-about-details">
            <div>Total Funding</div>
            <div>$20M</div>
          </div>
          <div class="dm-about-details">
            <div>Last Funding Type</div>
            <div>Series B</div>
          </div>
        </div>
        <div class="dm-about-more-details">
          <div class="dm-about-more-details-data">
            <div>Investors</div>
            <div>
              Vance Refrigeration, The Michael Scott Paper Company, Sabre
              International, Athleap
            </div>
          </div>
          <div class="dm-about-more-details-data">
            <div>Leadership</div>
            <div>
              David Wallace (CEO), Michael Scott (Regional Manager), Jan
              Levinson (VP Sales), Jim Halpert (Sales Manager), Pamela Beesly
              (Head of Communications)
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News section -->
    <section>
      <div>
        <div><h2>In the news</h2></div>
        <div>
          <span class="dm-about-slide-icon">
            <i class="fas fa-chevron-left"></i
          ></span>
          <span class="dm-about-slide-icon">
            <i class="fas fa-chevron-right"></i
          ></span>
        </div>
        <div>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dm-about-desc {
  border-left: 4px solid rgb(129, 129, 247);
  text-align: left;
  padding-left: 32px;
}
.dm-about-slide-icon {
  border: 1px solid #ccc;
}
.dm-about-slider-data {
  border: 1px solid #ccc;
  border-radius: 4px;
}
.dm-about-news-card {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.dm-about-news-card img {
  border-radius: 8px;
}
</style>