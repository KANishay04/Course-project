import React from "react";
import "./CoursesScreen.css";

// Суреттерді импорттау
import interactiveImage from "../../images/interactive.jpg";
import flexibilityImage from "../../images/flexibility.jpg";
import certificationImage from "../../images/certification.jpg";

function CoursesScreen() {
  return (
    <div className="courses-screen">
      {/* Жоғарғы баннер */}
      <header className="banner">
        <div className="banner-content">
          <h1>Master English with Ease</h1>
          <p>Your journey to fluent English starts here. Join thousands of learners worldwide.</p>
          <button className="cta-button">Explore Courses</button>
        </div>
      </header>

      {/* Курстың ерекшеліктері */}
      <section className="features-section">
        <h2>What Makes Our Courses Unique?</h2>
        <div className="features">
          <div className="feature">
            <img src={interactiveImage} alt="Interactive" />
            <h3>Interactive Lessons</h3>
            <p>Learn through engaging and practical exercises.</p>
          </div>
          <div className="feature">
            <img src={flexibilityImage} alt="Flexibility" />
            <h3>Flexible Schedules</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
          </div>
          <div className="feature">
            <img src={certificationImage} alt="Certification" />
            <h3>Certified Tutors</h3>
            <p>Get guidance from highly qualified professionals.</p>
          </div>
        </div>
      </section>

      {/* Шақыру */}
      <section className="cta-section">
        <h2>Start Your English Journey Today!</h2>
        <p>Join our global community of learners and achieve your goals with confidence.</p>
        <button className="cta-button">Enroll Now</button>
      </section>
    </div>
  );
}

export default CoursesScreen;
