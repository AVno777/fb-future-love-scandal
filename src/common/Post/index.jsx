import React from "react";
import postImage from "../../assets/imgs/post-image.webp";
import userImage from "../../assets/imgs/comment-user.webp";
function Post() {
  return (
    <div className="p-5 bg-white flex w-9/12 items-start rounded-mlarge mr-4">
      <div className="grow mr-8">
        <img
          src={postImage}
          alt="Post image"
          className="object-none w-3/5 h-96 rounded-mlarge"
        />
      </div>
      <div className=" w-2/5 grow-0">
        <div className="flex items-center">
          <div className="w-fit h-fit mr-2">
            <img
              src={userImage}
              alt="User image"
              className="w-12 h-12 object-cover rounded-full mx-auto items-center"
            />
          </div>
          <div className="text-lg"> Username</div>
        </div>
        <div className="mt-3 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa
          odit rerum quia, voluptas facere distinctio quidem? Molestiae sequi,
          animi, quaerat quos, exercitationem eaque voluptatem asperiores natus
          nemo tempore assumenda?
        </div>
        <div className="flex">
          <div className="flex grow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconsax/Bold/eye">
                <path
                  id="Vector"
                  d="M21.25 9.14993C18.94 5.51993 15.56 3.42993 12 3.42993C10.22 3.42993 8.49 3.94993 6.91 4.91993C5.33 5.89993 3.91 7.32993 2.75 9.14993C1.75 10.7199 1.75 13.2699 2.75 14.8399C5.06 18.4799 8.44 20.5599 12 20.5599C13.78 20.5599 15.51 20.0399 17.09 19.0699C18.67 18.0899 20.09 16.6599 21.25 14.8399C22.25 13.2799 22.25 10.7199 21.25 9.14993ZM12 16.0399C9.76 16.0399 7.96 14.2299 7.96 11.9999C7.96 9.76993 9.76 7.95993 12 7.95993C14.24 7.95993 16.04 9.76993 16.04 11.9999C16.04 14.2299 14.24 16.0399 12 16.0399Z"
                  fill="url(#paint0_linear_131_625)"
                />
                <path
                  id="Vector_2"
                  d="M11.9981 9.13989C11.2409 9.13989 10.5147 9.44069 9.97928 9.9761C9.44386 10.5115 9.14307 11.2377 9.14307 11.9949C9.14307 12.7521 9.44386 13.4783 9.97928 14.0137C10.5147 14.5491 11.2409 14.8499 11.9981 14.8499C13.5681 14.8499 14.8581 13.5699 14.8581 11.9999C14.8581 10.4299 13.5681 9.13989 11.9981 9.13989Z"
                  fill="url(#paint1_linear_131_625)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_131_625"
                  x1="22"
                  y1="20.5599"
                  x2="1.06509"
                  y2="13.4384"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B057F4" />
                  <stop offset="1" stop-color="#F77CA9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_131_625"
                  x1="14.8581"
                  y1="14.8499"
                  x2="8.70677"
                  y2="13.0561"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B057F4" />
                  <stop offset="1" stop-color="#F77CA9" />
                </linearGradient>
              </defs>
            </svg>
            <p>13.2k views</p>
          </div>
          <div className="flex grow-0">
            <p>14</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 1"
                d="M12.3871 6.96792C3.09677 6.34857 0.258065 18.0647 0 24.0002C3.71613 17.1874 9.80645 16.0001 12.3871 16.2581V22.4516L24 11.6129L12.3871 0V6.96792Z"
                fill="url(#paint0_linear_131_575)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_131_575"
                  x1="24"
                  y1="24.0002"
                  x2="-1.83578"
                  y2="16.4728"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B057F4" />
                  <stop offset="1" stop-color="#F77CA9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex grow-0 ml-2">
            <p>14</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconsax/Bold/messages3">
                <path
                  id="Vector"
                  d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6.34876 21.9493 6.23046 21.9895 6.10796 21.9963C5.98547 22.003 5.86346 21.9761 5.75521 21.9184C5.64695 21.8606 5.5566 21.7743 5.49398 21.6688C5.43135 21.5633 5.39885 21.4427 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                  fill="url(#paint0_linear_131_150)"
                />
                <path
                  id="Vector_2"
                  d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75Z"
                  fill="url(#paint1_linear_131_150)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_131_150"
                  x1="15.59"
                  y1="21.9973"
                  x2="1.06651"
                  y2="17.5728"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B057F4" />
                  <stop offset="1" stop-color="#F77CA9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_131_150"
                  x1="22"
                  y1="15.6"
                  x2="4.47119"
                  y2="9.21605"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B057F4" />
                  <stop offset="1" stop-color="#F77CA9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
