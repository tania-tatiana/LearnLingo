import { useState } from "react";
import css from "./TeacherCard.module.css";
import BookingForm from "../BookingForm/BookingForm";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function TeacherCard({
  user,
  teacher,
  toggleFavorite,
  isFavorite,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClickFavorite = () => {
    if (!user) {
      toast.error("Please log in or register");
      return;
    }
    toggleFavorite(teacher);
  };

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowForm(false);
      setIsClosing(false);
      document.body.style.overflow = "unset";
    }, 300);
  };

  const handleOpen = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <li className={css.item}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={css.card}>
        <div className={css.teacherIcon}>
          <img
            src={teacher.avatar_url}
            alt="Teacher photo"
            className={css.icon}
          />
          <svg
            className={css.online}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
            <circle cx="6" cy="6" r="4" fill="#38CD3E" />
          </svg>
        </div>
        <div className={css.allText}>
          <div className={css.firstLine}>
            <div className={css.mainInfo}>
              <p className={css.languages}>Languages</p>
              <h2
                className={css.name}
              >{`${teacher.name} ${teacher.surname}`}</h2>
            </div>
            <div className={css.detailsAndFavorite}>
              <div className={css.details}>
                <div className={css.lessons}>
                  <svg
                    className={css.book}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6667 4.13333C14.6667 3.3866 14.6667 3.01323 14.5213 2.72801C14.3935 2.47713 14.1895 2.27316 13.9387 2.14532C13.6534 2 13.2801 2 12.5333 2H12.2667C10.7732 2 10.0265 2 9.45603 2.29065C8.95426 2.54631 8.54631 2.95426 8.29065 3.45603C8 4.02646 8 4.77319 8 6.26667V14L8.0667 13.8999C8.5298 13.2053 8.76135 12.858 9.06727 12.6065C9.33809 12.3839 9.65016 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12H12.5333C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5229 14.5213 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.86667V4.13333Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.33331 4.13333C1.33331 3.3866 1.33331 3.01323 1.47864 2.72801C1.60647 2.47713 1.81044 2.27316 2.06133 2.14532C2.34654 2 2.71991 2 3.46665 2H3.73331C5.22679 2 5.97352 2 6.54395 2.29065C7.04572 2.54631 7.45367 2.95426 7.70933 3.45603C7.99998 4.02646 7.99998 4.77319 7.99998 6.26667V14L7.93328 13.8999C7.47018 13.2053 7.23863 12.858 6.93271 12.6065C6.66188 12.3839 6.34982 12.2169 6.01438 12.1151C5.63548 12 5.21805 12 4.3832 12H3.46665C2.71991 12 2.34654 12 2.06133 11.8547C1.81044 11.7268 1.60647 11.5229 1.47864 11.272C1.33331 10.9868 1.33331 10.6134 1.33331 9.86667V4.13333Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Lessons online</p>
                </div>
                <p className={css.quantity}>
                  Lessons done: {teacher.lessons_done}
                </p>
                <div className={css.rating}>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.88971 4.12573C9.04886 4.42725 9.33893 4.63786 9.67487 4.69604L13.4747 5.35229L10.7872 8.11987C10.5497 8.36444 10.4388 8.70526 10.4874 9.04272L11.0362 12.8601L7.57526 11.1589L7.45807 11.1091C7.21999 11.0245 6.95982 11.0245 6.72174 11.1091L6.60455 11.1589L3.14264 12.8601L3.69244 9.04272C3.74097 8.70526 3.63016 8.36444 3.39264 8.11987L0.704163 5.35229L4.50494 4.69604C4.84088 4.63786 5.13095 4.42725 5.2901 4.12573L7.0899 0.7146L8.88971 4.12573Z"
                      fill="#FFC531"
                      stroke="#FFC531"
                      strokeWidth="1.2"
                    />
                  </svg>
                  <p>Rating: {teacher.rating}</p>
                </div>
                <p className={css.price}>
                  Price / 1 hour:{" "}
                  <span className={css.priceGreen}>
                    {teacher.price_per_hour}$
                  </span>
                </p>
              </div>
              <div className={css.favorite}>
                <button
                  className={css.favoriteBtn}
                  onClick={handleClickFavorite}
                >
                  {isFavorite(teacher.id) ? (
                    <IoHeart size={26} className={css.heart} />
                  ) : (
                    <IoMdHeartEmpty size={26} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={css.descBlock}>
            <div className={css.desc}>
              <p className={css.speaks}>
                Speaks:{" "}
                <span className={css.speaksSpan}>
                  {teacher.languages.join(", ")}
                </span>
              </p>
              <p className={css.info}>
                Lesson Info:{" "}
                <span className={css.infoSpan}>{teacher.lesson_info}</span>
              </p>
              <p className={css.conditions}>
                Conditions:{" "}
                <span className={css.conditionsSpan}>
                  {teacher.conditions.join(" ")}
                </span>
              </p>
            </div>
            {!isOpen ? (
              <a
                onClick={() => setIsOpen((prev) => !prev)}
                className={css.button}
              >
                Read more
              </a>
            ) : (
              <div>
                <p className={css.extendedDesc}>{teacher.experience}</p>
                <div className={css.reviews}>
                  {teacher.reviews.map((review, index) => (
                    <div key={index} className={css.reviewCard}>
                      <div className={css.reviewerFirstLine}>
                        <div className={css.reviewerIcon}>
                          {review.reviewer_name.charAt(0)}
                        </div>
                        <div>
                          <p className={css.reviewerName}>
                            {review.reviewer_name}
                          </p>
                          <div className={css.reviewerRating}>
                            <svg
                              width="15"
                              height="14"
                              viewBox="0 0 15 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.88965 4.12573C9.0488 4.42725 9.33887 4.63786 9.6748 4.69604L13.4746 5.35229L10.7871 8.11987C10.5496 8.36444 10.4388 8.70526 10.4873 9.04272L11.0361 12.8601L7.5752 11.1589L7.45801 11.1091C7.21993 11.0245 6.95976 11.0245 6.72168 11.1091L6.60449 11.1589L3.14258 12.8601L3.69238 9.04272C3.74091 8.70526 3.6301 8.36444 3.39258 8.11987L0.704102 5.35229L4.50488 4.69604C4.84082 4.63786 5.13088 4.42725 5.29004 4.12573L7.08984 0.7146L8.88965 4.12573Z"
                                fill="#FFC531"
                                stroke="#FFC531"
                                strokeWidth="1.2"
                              />
                            </svg>
                            <p>{review.reviewer_rating}.0</p>
                          </div>
                        </div>
                      </div>
                      <p className={css.comment}>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={css.englishLevels}>
            {teacher.levels.map((level, index) => (
              <p
                key={level}
                className={
                  index === 0 ? css.englishLevelActive : css.englishLevel
                }
              >
                {level}
              </p>
            ))}
          </div>
          {isOpen && (
            <button className={css.bookingButton} onClick={handleOpen}>
              Book trial lesson
            </button>
          )}
          {
            <div
              className={`${css.overlay} ${showForm && !isClosing ? css.overlayOpen : css.overlayClosing}`}
              onClick={handleClose}
            >
              <div
                className={`${css.modal} ${showForm && !isClosing ? css.modalOpen : css.modalClosing}`}
                onClick={(event) => event.stopPropagation()}
              >
                <BookingForm teacher={teacher} onClose={handleClose} />
              </div>
            </div>
          }
        </div>
      </div>
    </li>
  );
}
