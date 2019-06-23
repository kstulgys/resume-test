import React from "react"
import Section from "./Section"
import apolloClient from "./images/skill-icons/apollo-client.png"
import octopus from "./images/skill-icons/octopus.png"

export default function Skills() {
  return (
    <Section id="Skills">
      <div class="item mb-5">
        <div class="row">
          <div class="col-12">
            <div className="w-100 text-center py-4">
              <h2 className="font-weight-bold text-secondary">Frontend</h2>
            </div>

            <ul class="mt-2 d-flex flex-wrap align-items-center justify-content-around">
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  viewBox="0 0 256 361"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
                    fill="#E44D26"
                  />
                  <path
                    d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
                    fill="#F16529"
                  />
                  <path
                    d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
                    fill="#EBEBEB"
                  />
                  <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
                  <path
                    d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
                    fill="#FFF"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  enable-background="new 0 0 1771 2499.8"
                  viewBox="0 0 1771 2499.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1387.8 92.5h-146.9l152.8 165.9v78.9h-314.8v-92.4h152.8l-152.8-165.9v-79h309zm-371.4 0h-147.1l153 165.9v78.9h-314.9v-92.4h152.8l-152.8-165.9v-79h309zm-367.8 3.8h-158.5v144.8h158.5v96.3h-271.3v-337.4h271.3z"
                    fill="#131313"
                  />
                  <path
                    d="m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z"
                    fill="#1572b6"
                  />
                  <path
                    d="m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z"
                    fill="#33a9dc"
                  />
                  <path
                    d="m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z"
                    fill="#fff"
                  />
                  <path
                    d="m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z"
                    fill="#ebebeb"
                  />
                  <path
                    d="m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z"
                    fill="#fff"
                  />
                  <path
                    d="m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z"
                    fill="#ebebeb"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  enable-background="new 0 0 1776 2500"
                  viewBox="0 0 1776 2500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z"
                    fill="#e6a329"
                  />
                  <path
                    d="m887.9 637v1710l584.5-165.6 142.2-1544.4z"
                    fill="#f1bf22"
                  />
                  <path
                    d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z"
                    fill="#fff"
                  />
                  <path
                    d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z"
                    fill="#ebebeb"
                  />
                  <path
                    d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z"
                    fill="#231f20"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "5.5rem" }}
                  viewBox="0 0 256 230"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
                    fill="#FFF"
                  />
                  <path
                    d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
                    fill="#53C1DE"
                  />
                  <path
                    d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
                    fill="#FFF"
                  />
                  <path
                    d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
                    fill="#53C1DE"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  viewBox=".5 -.2 1023 1024.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                  <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
                </svg>
              </li>

              <li className="p-3">
                <img src={apolloClient} style={{ width: "6rem" }} />
              </li>
            </ul>
          </div>

          <div class="col-12">
            <div className="w-100 text-center py-4">
              <h2 className="font-weight-bold text-secondary">Backend</h2>
            </div>

            <ul class="mt-2 d-flex flex-wrap align-items-center justify-content-around">
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  viewBox="0 0 256 288"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z"
                    fill="#E535AB"
                    fill-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "4rem" }}
                  viewBox="1.008 18.463 180 160.509"
                >
                  <title>Slice 1</title>
                  <path
                    fill="#F4A93F"
                    d="M80.95 76l19.202 33.45-24.243-.872L80.95 76z"
                  />
                  <path
                    fill="#F4A83E"
                    d="M90.16 82.4l14.234 27.05-29.091-.872L90.16 82.4z"
                  />
                  <path
                    fill="#E88634"
                    d="M87.489 87.038L99.94 109.45l-24.333-.243 11.882-22.169z"
                  />
                  <path
                    fill="#F8CA51"
                    d="M100.546 84.758l3.849 24.692L75 109.152l25.546-24.394z"
                  />
                  <path
                    fill="#F8CA51"
                    d="M90.16 117l14.555-7.848L75 108.875 90.16 117z"
                  />
                  <path
                    fill="#E88634"
                    d="M1.008 98C1.643 118.712 41.69 135 91 135v-8.002C51.309 126.8 9.675 114.643 9.008 98h-8z"
                  />
                  <path
                    fill="#F9CB52"
                    d="M135.523 21.782c-18.254-9.806-52.383 16.733-77.04 59.436l6.93 4.001c20.016-34.275 51.363-64.252 66.109-56.508l4.001-6.929z"
                  />
                  <path
                    fill="#E88634"
                    d="M1.008 98C1.643 77.288 41.69 61 91 61v8.002C51.309 69.2 9.675 81.358 9.008 98h-8z"
                  />
                  <path
                    fill="#F4A73E"
                    d="M46.043 20c-17.62 10.906-11.702 53.732 12.953 96.436l6.93-4.002C46.251 77.963 35.964 35.827 50.043 26.93l-4-6.93z"
                  />
                  <path
                    fill="#F9CB52"
                    d="M46.043 176.436C28.423 165.53 34.34 122.703 58.996 80l6.93 4.001c-19.675 34.472-29.962 76.608-15.883 85.506l-4 6.929z"
                  />
                  <path
                    fill="#F4A73E"
                    d="M45 20.5c18.255-9.806 52.384 16.732 77.04 59.436l-6.931 4C95.093 49.662 63.746 19.687 49 27.43l-4-6.93z"
                  />
                  <path
                    fill="#E88634"
                    d="M181 98c-.635-20.712-40.684-37-89.992-37v8.002C130.698 69.2 172.333 81.358 173 98h8z"
                  />
                  <path
                    fill="#F9CB52"
                    d="M45.241 176.501c.107.065.214.129.322.19 18.143 10.476 52.623-16.146 77.476-59.191l-6.893-4.066c-20.174 34.58-51.899 64.808-66.501 56.377a9.81 9.81 0 0 1-.437-.267l-3.967 6.957z"
                  />
                  <path
                    fill="#F4A73E"
                    d="M136.036 175.938C117.779 185.738 83.653 159.2 59 116.5l-.26-.45 6.836-4.159c19.984 34.502 51.585 64.862 66.431 57.133l4.029 6.914z"
                  />
                  <path
                    fill="#E88634"
                    d="M181 97c.005.166.008.333.008.5 0 20.95-40.295 37.5-90 37.5v-8.002c40.012-.198 82-12.555 82-29.403a9.8 9.8 0 0 0-.018-.595H181z"
                  />
                  <path
                    fill="#F4A73E"
                    d="M135.005 176.43c17.608-10.914 11.688-53.734-12.962-96.43l-.439-.76-7.022 3.835.047.082c19.952 34.558 30.521 77.214 16.45 86.298l3.926 6.975z"
                  />
                  <path
                    fill="#F9CB52"
                    d="M135.48 21.282c17.619 10.906 11.701 53.733-12.953 96.436l-6.93-4.001c19.676-34.472 29.961-76.608 15.883-85.506l4-6.929z"
                  />
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  viewBox="0 0 256 282"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g fill="#8CC84B">
                    <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                    <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                  </g>
                </svg>
              </li>

              <li className="p-3">
                <svg
                  style={{ width: "10rem" }}
                  viewBox="0 0 512 146"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M476.713 60.463c-.46.092-.922 1.107-.922 1.66-.092 3.692-.184 13.474-.184 20.118 0 .185.276.554.553.554 1.384.092 4.706.184 7.567.184 3.968 0 6.275-.553 7.568-1.106 3.321-1.662 4.89-5.261 4.89-9.23 0-8.95-6.275-12.365-15.596-12.365-.646-.092-2.49-.092-3.876.185zm23.81 41.25c0-9.136-6.737-14.212-18.918-14.212-.554 0-4.43-.092-5.353.092-.277.093-.645.278-.645.555 0 6.551-.093 16.98.184 21.04.184 1.753 1.477 4.245 3.046 4.983 1.66.923 5.444 1.107 8.028 1.107 7.29 0 13.658-4.06 13.658-13.565zm-42.634-46.325c.922 0 3.69.276 10.796.276 6.737 0 12.089-.184 18.641-.184 8.028 0 19.102 2.86 19.102 14.857 0 5.906-4.153 10.613-9.597 12.92-.276.092-.276.276 0 .368 7.751 1.939 14.581 6.737 14.581 15.78 0 8.86-5.537 14.489-13.566 17.996-4.891 2.122-10.981 2.86-17.164 2.86-4.707 0-17.349-.553-24.362-.368-.738-.278.646-3.6 1.291-4.153 1.662-.093 2.953-.185 4.707-.739 2.492-.645 2.768-1.384 3.137-5.167.185-3.23.185-14.674.185-22.794 0-11.166.093-18.733 0-22.424-.092-2.86-1.107-3.784-3.137-4.338-1.57-.276-4.153-.646-6.276-.922-.462-.462 1.107-3.6 1.662-3.968zm-53.248 57.399c2.216 1.752 6.553 2.49 10.429 2.49 4.983 0 9.966-.921 14.765-5.26 4.891-4.428 8.305-11.257 8.305-22.146 0-10.429-3.968-18.919-12.089-23.901-4.614-2.862-10.52-4.06-17.349-4.06-2.03 0-3.968.092-5.167.645-.278.185-.923 1.015-.923 1.476-.185 1.846-.185 16.057-.185 24.363 0 8.582 0 20.579.185 21.963 0 1.385.645 3.507 2.03 4.43zm-20.948-57.4c1.754 0 8.49.277 11.72.277 5.815 0 9.967-.276 20.948-.276 9.228 0 16.98 2.491 22.517 7.197 6.736 5.814 10.244 13.843 10.244 23.624 0 13.935-6.368 21.964-12.736 26.578-6.366 4.706-14.672 7.474-26.484 7.474-6.275 0-17.072-.184-26.024-.277h-.092c-.461-.83.738-4.06 1.476-4.152 2.4-.277 3.046-.37 4.246-.83 1.937-.739 2.307-1.754 2.584-5.168.276-6.368.184-14.027.184-22.702 0-6.182.092-18.272-.093-22.148-.276-3.229-1.66-4.06-4.429-4.614-1.384-.276-3.23-.646-5.813-.922-.37-.647 1.291-3.507 1.752-4.06z"
                      fill="#8E714E"
                    />
                    <path
                      d="M272.033 116.385c-2.307-.277-3.968-.645-5.998-1.568-.277-.185-.739-1.107-.739-1.477-.184-3.23-.184-12.458-.184-18.64 0-4.984-.83-9.321-2.953-12.366-2.492-3.508-6.09-5.537-10.705-5.537-4.06 0-9.505 2.768-14.027 6.644-.092.092-.83.739-.738-.277 0-1.015.185-3.045.277-4.43.093-1.292-.646-1.937-.646-1.937-2.953 1.476-11.258 3.414-14.304 3.69-2.214.463-2.768 2.585-.46 3.323h.092c2.49.738 4.152 1.569 5.443 2.4.923.738.831 1.753.831 2.584.092 6.92.092 17.533-.184 23.347-.092 2.307-.738 3.137-2.4 3.506l.185-.092c-1.292.277-2.307.553-3.876.738-.554.554-.554 3.507 0 4.153 1.015 0 6.367-.277 10.798-.277 6.09 0 9.228.277 10.796.277.646-.738.831-3.507.462-4.153-1.754-.092-3.046-.276-4.245-.646-1.661-.37-2.123-1.199-2.216-3.137-.183-4.892-.183-15.227-.183-22.24 0-1.938.553-2.861 1.106-3.415 2.123-1.845 5.538-3.137 8.583-3.137 2.953 0 4.89.923 6.367 2.123 2.03 1.66 2.676 4.06 2.953 5.813.461 3.968.277 11.812.277 18.641 0 3.691-.277 4.614-1.66 5.075-.647.277-2.308.647-4.246.83-.646.647-.461 3.508 0 4.154 2.676 0 5.814-.277 10.428-.277 5.721 0 9.413.277 10.89.277.46-.554.645-3.23.276-3.969zm25.562-35.25c-4.89 0-7.936 3.783-7.936 9.688 0 5.999 2.676 12.92 10.243 12.92 1.292 0 3.692-.554 4.798-1.846 1.754-1.66 2.954-4.983 2.954-8.49 0-7.659-3.784-12.273-10.059-12.273zm-.646 40.787c-1.845 0-3.138.554-3.968 1.016-3.876 2.49-5.629 4.89-5.629 7.752 0 2.675 1.015 4.797 3.23 6.643 2.676 2.307 6.367 3.415 11.073 3.415 9.413 0 13.566-5.076 13.566-10.058 0-3.508-1.754-5.815-5.352-7.106-2.584-1.108-7.29-1.662-12.92-1.662zm.646 23.994c-5.629 0-9.69-1.2-13.196-3.876-3.415-2.584-4.891-6.46-4.891-9.136 0-.738.185-2.769 1.846-4.614 1.014-1.108 3.23-3.23 8.49-6.829.184-.092.276-.184.276-.37 0-.184-.185-.369-.369-.46-4.337-1.661-5.629-4.338-5.999-5.814v-.185c-.091-.554-.276-1.107.555-1.661.646-.461 1.569-1.015 2.583-1.66 1.569-.924 3.23-1.939 4.245-2.77.185-.184.185-.368.185-.553 0-.185-.185-.37-.37-.461-6.458-2.123-9.688-6.922-9.688-14.12 0-4.706 2.122-8.951 5.905-11.627 2.584-2.03 9.044-4.522 13.289-4.522h.277c4.337.092 6.736 1.015 10.15 2.215 1.846.646 3.6.922 6 .922 3.598 0 5.167-1.107 6.458-2.398.093.184.278.646.37 1.845.092 1.2-.277 2.953-1.2 4.245-.738 1.015-2.399 1.754-4.06 1.754h-.462c-1.661-.185-2.4-.37-2.4-.37l-.368.185c-.092.185 0 .369.092.646l.093.185c.184.83.553 3.321.553 3.968 0 7.567-3.045 10.888-6.275 13.38-3.138 2.307-6.736 3.783-10.797 4.153-.092 0-.46 0-1.292.092-.461 0-1.107.093-1.2.093h-.092c-.738.184-2.583 1.107-2.583 2.675 0 1.384.83 3.046 4.798 3.323.83.092 1.66.092 2.584.185 5.26.368 11.812.83 14.857 1.845 4.245 1.568 6.921 5.352 6.921 9.874 0 6.83-4.89 13.197-13.011 17.164-3.968 1.754-7.937 2.677-12.274 2.677zm52.6-64.32c-1.937 0-3.691.46-4.983 1.383-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.367-2.215 2.676-2.216 4.061-6.645 4.061-12.828 0-11.996-5.999-20.025-14.765-20.025zm1.662 39.496c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.996 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-3.045 2.03-8.305 3.968-12.643 3.968h.001zM187.411 81.595c-1.938 0-3.691.461-4.984 1.384-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.368-2.215 2.675-2.216 4.06-6.645 4.06-12.828 0-11.996-5.906-20.025-14.765-20.025zm1.661 39.497c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.997 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-2.953 2.03-8.213 3.968-12.642 3.968zm-105.478-.923c-.185-.276-.37-1.107-.277-2.122 0-.739.185-1.2.277-1.384 1.938-.278 2.953-.555 4.06-.831 1.846-.462 2.584-1.476 2.676-3.783.278-5.537.278-16.058.185-23.348v-.185c0-.83 0-1.846-1.015-2.584-1.477-.922-3.23-1.752-5.537-2.4-.83-.275-1.384-.737-1.292-1.29 0-.554.554-1.2 1.754-1.385 3.045-.277 10.98-2.214 14.118-3.599.185.184.462.739.462 1.477l-.092 1.014c-.093 1.016-.185 2.216-.185 3.415 0 .369.37.646.738.646.185 0 .37-.092.554-.185 5.906-4.614 11.258-6.275 14.026-6.275 4.523 0 8.03 2.123 10.706 6.552.184.278.369.37.646.37.184 0 .46-.092.553-.277 5.445-4.153 10.89-6.645 14.488-6.645 8.582 0 13.658 6.368 13.658 17.165 0 3.045 0 7.013-.092 10.613 0 3.229-.092 6.182-.092 8.305 0 .46.645 1.937 1.66 2.214 1.292.646 3.046.923 5.353 1.292h.092c.185.646-.184 3.045-.553 3.507-.554 0-1.385 0-2.307-.092a136.208 136.208 0 0 0-7.014-.185c-5.721 0-8.674.092-11.536.277-.183-.738-.276-2.953 0-3.507 1.662-.276 2.492-.554 3.508-.83 1.846-.554 2.307-1.385 2.4-3.784 0-1.753.368-16.703-.186-20.302-.553-3.691-3.322-8.028-9.413-8.028-2.307 0-5.905.923-9.412 3.598-.184.185-.37.646-.37.923v.093c.37 1.937.37 4.153.37 7.567v5.998c0 4.153-.093 8.029 0 10.981 0 2.031 1.2 2.492 2.215 2.862.554.091.922.184 1.384.276.83.185 1.661.37 2.953.646.185.37.185 1.569-.092 2.584-.093.554-.278.83-.37.923-3.137-.092-6.367-.185-11.073-.185-1.384 0-3.784.093-5.814.093-1.662 0-3.23.092-4.152.092-.093-.185-.278-.83-.278-1.846 0-.83.185-1.476.37-1.661.461-.092.83-.184 1.292-.184 1.106-.185 2.03-.37 2.952-.554 1.57-.461 2.123-1.292 2.215-3.322.277-4.614.554-17.81-.092-21.133-1.107-5.352-4.152-8.028-9.044-8.028-2.86 0-6.46 1.384-9.412 3.6-.462.368-.831 1.29-.831 2.121v5.445c0 6.644 0 14.95.092 18.549.093 1.106.461 2.399 2.584 2.86.462.092 1.2.277 2.123.37l1.66.276c.186.554.093 2.769-.276 3.507-.923 0-2.03-.092-3.323-.092-1.937-.093-4.429-.185-7.197-.185-3.23 0-5.537.092-7.383.185-1.292-.185-2.307-.185-3.414-.185z"
                      fill="#442D22"
                    />
                    <path
                      d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z"
                      fill="#FFF"
                    />
                    <path
                      d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z"
                      fill="#A6A385"
                    />
                    <path
                      d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47"
                      fill="#FFF"
                    />
                    <path
                      d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47"
                      fill="#499D4A"
                    />
                    <path
                      d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z"
                      fill="#FFF"
                    />
                    <path
                      d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z"
                      fill="#58AA50"
                    />
                  </g>
                </svg>
              </li>
              <li className="p-3">
                <svg
                  style={{ width: "10rem" }}
                  fill="none"
                  viewBox="1.372 -.18543865 324.553 128.18543865"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#0c344b">
                    <path d="m199.202 85.75h8.638v-31.662h-8.638zm-.367-39.847c0-2.813 1.567-4.219 4.701-4.219 3.133 0 4.701 1.406 4.701 4.219 0 1.341-.392 2.384-1.175 3.13-.784.746-1.959 1.118-3.526 1.118-3.134 0-4.701-1.416-4.701-4.248z" />
                    <path
                      clip-rule="evenodd"
                      d="m164.253 67.483c2.786-2.36 4.178-5.767 4.178-10.223 0-4.286-1.307-7.51-3.922-9.672-2.615-2.16-6.433-3.242-11.456-3.242h-13.225v41.404h8.779v-14.727h3.767c5.135 0 9.095-1.179 11.879-3.54zm-12.757-3.653h-2.889v-12.29h3.993c2.398 0 4.158.49 5.282 1.472 1.123.982 1.685 2.502 1.685 4.56 0 2.038-.67 3.591-2.011 4.658s-3.36 1.6-6.06 1.6z"
                      fill-rule="evenodd"
                    />
                    <path d="m194.62 53.748c-.774-.17-1.746-.255-2.917-.255-1.964 0-3.781.543-5.451 1.628a11.908 11.908 0 0 0 -3.98 4.291h-.424l-1.275-5.324h-6.542v31.662h8.638v-16.114c0-2.549.769-4.532 2.307-5.948 1.54-1.416 3.687-2.124 6.444-2.124 1.001 0 1.85.095 2.549.283zm40.245 30.02c2.257-1.7 3.385-4.172 3.385-7.42 0-1.567-.273-2.917-.821-4.05-.547-1.133-1.398-2.133-2.549-3.002-1.151-.868-2.964-1.802-5.438-2.803-2.775-1.114-4.573-1.955-5.394-2.521s-1.233-1.236-1.233-2.011c0-1.378 1.275-2.067 3.824-2.067 1.434 0 2.841.217 4.219.65 1.378.436 2.861.992 4.447 1.672l2.605-6.23c-3.606-1.661-7.316-2.492-11.13-2.492-4.003 0-7.093.769-9.273 2.308-2.183 1.539-3.273 3.714-3.273 6.527 0 1.643.26 3.026.78 4.149.518 1.124 1.349 2.12 2.493 2.988 1.14.869 2.931 1.813 5.365 2.832 1.699.718 3.059 1.345 4.079 1.883 1.019.539 1.737 1.02 2.153 1.445.415.425.622.977.622 1.657 0 1.812-1.567 2.718-4.702 2.718-1.529 0-3.299-.255-5.309-.764-2.012-.51-3.819-1.142-5.424-1.898v7.137a22.275 22.275 0 0 0 4.56 1.373c1.624.312 3.587.468 5.891.468 4.492 0 7.867-.85 10.123-2.55zm37.604 1.982h-8.638v-18.493c0-2.284-.383-3.998-1.146-5.14-.766-1.142-1.969-1.714-3.612-1.714-2.208 0-3.813.812-4.814 2.436s-1.501 4.295-1.501 8.015v14.896h-8.638v-31.662h6.599l1.161 4.05h.482c.849-1.454 2.077-2.592 3.681-3.413 1.605-.821 3.446-1.232 5.523-1.232 4.739 0 7.948 1.549 9.629 4.645h.764c.85-1.473 2.101-2.615 3.753-3.427s3.516-1.218 5.593-1.218c3.587 0 6.302.921 8.142 2.761 1.841 1.841 2.761 4.791 2.761 8.85v20.646h-8.666v-18.493c0-2.284-.383-3.998-1.146-5.14-.766-1.142-1.969-1.714-3.612-1.714-2.114 0-3.695.756-4.744 2.266-1.047 1.511-1.571 3.908-1.571 7.193z" />
                    <path
                      clip-rule="evenodd"
                      d="m318.222 81.445 1.671 4.305h6.032v-21.099c0-3.776-1.133-6.589-3.398-8.439-2.266-1.85-5.523-2.776-9.771-2.776-4.436 0-8.477.954-12.121 2.861l2.86 5.834c3.417-1.53 6.391-2.294 8.921-2.294 3.285 0 4.928 1.605 4.928 4.814v1.388l-5.494.17c-4.739.17-8.283 1.053-10.635 2.648-2.35 1.596-3.525 4.074-3.525 7.434 0 3.21.873 5.683 2.619 7.42 1.747 1.737 4.139 2.605 7.18 2.605 2.473 0 4.479-.354 6.017-1.062 1.539-.708 3.035-1.977 4.489-3.809zm-4.22-10.252 3.342-.113v2.605c0 1.908-.6 3.437-1.799 4.588-1.198 1.152-2.799 1.728-4.8 1.728-2.794 0-4.191-1.218-4.191-3.653 0-1.7.613-2.964 1.841-3.795 1.227-.83 3.096-1.284 5.607-1.36zm-218.269 30.336-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.101 3.319-1.733 3.801zm9.857-4.01-44.022-93.482v-.002a7.062 7.062 0 0 0 -6.019-4.022c-2.679-.156-5.079 1.136-6.433 3.335l-47.744 77.33a7.233 7.233 0 0 0 .084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 0 0 4.66-4.028 7.264 7.264 0 0 0 -.04-6.11z"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div className="w-100 text-center py-4 pt-5">
              <h2 className="font-weight-bold text-secondary">Testing</h2>
            </div>
            <ul class="mt-2 d-flex flex-wrap align-items-center justify-content-around">
              <li className="p-3">
                <svg
                  style={{ width: "4rem" }}
                  enable-background="new 0 0 398.3 439.9"
                  viewBox="0 0 398.3 439.9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m334.9 218.1c-.5.3-18.3-2.7-40.7-4.2-18.2-1.2-39.5-1.2-56.7 0-14 .9-32.4-6.1-34.6 2.3-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.2-11.1-64.1-41.9-80.1z"
                    fill="#99425b"
                    stroke="#fff"
                    stroke-width="20"
                  />
                  <path
                    d="m202.9 216.2c-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.1-11.1-64.1-41.9-80"
                    fill="none"
                    stroke="#fff"
                    stroke-width="20"
                  />
                  <path
                    d="m264.9 91.2 54.3 110.8 65.1-192h-239l65 191.6z"
                    fill="#99425b"
                  />
                  <path
                    d="m264.9 91.2 54.3 110.8 65.1-192h-239l65 191.6z"
                    fill="none"
                    stroke="#fff"
                    stroke-width="20"
                  />
                  <circle cx="199" cy="216.6" fill="#99425b" r="40.9" />
                  <g stroke="#fff" stroke-width="20">
                    <circle cx="199" cy="216.6" fill="none" r="40.9" />
                    <circle cx="332.4" cy="216.6" fill="#99425b" r="40.9" />
                    <circle cx="332.4" cy="216.6" fill="none" r="40.9" />
                  </g>
                  <circle cx="65.1" cy="216.9" fill="#99425b" r="40.9" />
                  <circle
                    cx="65.1"
                    cy="216.9"
                    fill="none"
                    r="40.9"
                    stroke="#fff"
                    stroke-width="20"
                  />
                </svg>
              </li>
              <li className="p-3">
                <img src={octopus} style={{ width: "4rem" }} />
              </li>
            </ul>
            {/* <div class="col-12">
              <div className="w-100 text-center py-4">
                <h2 className="font-weight-bold text-secondary">Other</h2>
              </div>

              <ul class="mt-2 d-flex flex-wrap align-items-center justify-content-around">
                <li className="p-2">
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                    style={{
                      width: "6rem",
                      fill: "transparent",
                      color: "blue"
                    }}
                  >
                    <path class="st0" d="M0 200V0h400v400H0" />
                    <path
                      class="st1"
                      d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
                    />
                  </svg>
                </li>
              </ul>
            </div> */}
          </div>

          <div class="col-0 col-lg-3" />
        </div>
      </div>
    </Section>
  )
}
