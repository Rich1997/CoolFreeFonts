const Logo = (props: { size: number }) => {
    return (
        <svg
            height={props.size}
            viewBox="0 0 167 26"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_311_92)">
                <path
                    d="M16.4205 11.0909H11.6136C11.5795 10.6932 11.4886 10.3324 11.3409 10.0085C11.1989 9.68466 11 9.40625 10.7443 9.17329C10.4943 8.93466 10.1903 8.75284 9.83239 8.62784C9.47443 8.49716 9.06818 8.43182 8.61364 8.43182C7.81818 8.43182 7.14489 8.625 6.59375 9.01136C6.0483 9.39773 5.63352 9.9517 5.34943 10.6733C5.07102 11.3949 4.93182 12.2614 4.93182 13.2727C4.93182 14.3409 5.07386 15.2358 5.35795 15.9574C5.64773 16.6733 6.06534 17.2131 6.6108 17.5767C7.15625 17.9347 7.8125 18.1136 8.57955 18.1136C9.01705 18.1136 9.40909 18.0597 9.75568 17.9517C10.1023 17.8381 10.4034 17.6761 10.6591 17.4659C10.9148 17.2557 11.1222 17.0028 11.2812 16.7074C11.446 16.4062 11.5568 16.0682 11.6136 15.6932L16.4205 15.7273C16.3636 16.4659 16.1563 17.2187 15.7983 17.9858C15.4403 18.7472 14.9318 19.4517 14.2727 20.0994C13.6193 20.7415 12.8097 21.2585 11.8438 21.6506C10.8778 22.0426 9.75568 22.2386 8.47727 22.2386C6.875 22.2386 5.4375 21.8949 4.16477 21.2074C2.89773 20.5199 1.89489 19.5085 1.15625 18.1733C0.423295 16.8381 0.0568182 15.2045 0.0568182 13.2727C0.0568182 11.3295 0.431818 9.69318 1.18182 8.36364C1.93182 7.02841 2.94318 6.01989 4.21591 5.33807C5.48864 4.65057 6.90909 4.30682 8.47727 4.30682C9.57955 4.30682 10.5938 4.45739 11.5199 4.75852C12.446 5.05966 13.2585 5.5 13.9574 6.07954C14.6563 6.65341 15.2188 7.3608 15.6449 8.2017C16.071 9.04261 16.3295 10.0057 16.4205 11.0909ZM23.7453 22.2386C22.3249 22.2386 21.1089 21.9574 20.0976 21.3949C19.0862 20.8267 18.3107 20.0369 17.7709 19.0256C17.2311 18.0085 16.9612 16.8295 16.9612 15.4886C16.9612 14.1477 17.2311 12.9716 17.7709 11.9602C18.3107 10.9432 19.0862 10.1534 20.0976 9.59091C21.1089 9.02273 22.3249 8.73864 23.7453 8.73864C25.1658 8.73864 26.3817 9.02273 27.393 9.59091C28.4044 10.1534 29.18 10.9432 29.7197 11.9602C30.2595 12.9716 30.5294 14.1477 30.5294 15.4886C30.5294 16.8295 30.2595 18.0085 29.7197 19.0256C29.18 20.0369 28.4044 20.8267 27.393 21.3949C26.3817 21.9574 25.1658 22.2386 23.7453 22.2386ZM23.7794 18.7614C24.1771 18.7614 24.5209 18.6278 24.8107 18.3608C25.1004 18.0937 25.3249 17.7131 25.4839 17.2188C25.643 16.7244 25.7226 16.1364 25.7226 15.4545C25.7226 14.767 25.643 14.179 25.4839 13.6903C25.3249 13.196 25.1004 12.8153 24.8107 12.5483C24.5209 12.2812 24.1771 12.1477 23.7794 12.1477C23.3589 12.1477 22.9982 12.2812 22.697 12.5483C22.3959 12.8153 22.1658 13.196 22.0067 13.6903C21.8476 14.179 21.768 14.767 21.768 15.4545C21.768 16.1364 21.8476 16.7244 22.0067 17.2188C22.1658 17.7131 22.3959 18.0937 22.697 18.3608C22.9982 18.6278 23.3589 18.7614 23.7794 18.7614ZM37.5453 22.2386C36.1249 22.2386 34.9089 21.9574 33.8976 21.3949C32.8862 20.8267 32.1107 20.0369 31.5709 19.0256C31.0311 18.0085 30.7612 16.8295 30.7612 15.4886C30.7612 14.1477 31.0311 12.9716 31.5709 11.9602C32.1107 10.9432 32.8862 10.1534 33.8976 9.59091C34.9089 9.02273 36.1249 8.73864 37.5453 8.73864C38.9658 8.73864 40.1817 9.02273 41.193 9.59091C42.2044 10.1534 42.98 10.9432 43.5197 11.9602C44.0595 12.9716 44.3294 14.1477 44.3294 15.4886C44.3294 16.8295 44.0595 18.0085 43.5197 19.0256C42.98 20.0369 42.2044 20.8267 41.193 21.3949C40.1817 21.9574 38.9658 22.2386 37.5453 22.2386ZM37.5794 18.7614C37.9771 18.7614 38.3209 18.6278 38.6107 18.3608C38.9004 18.0937 39.1249 17.7131 39.2839 17.2188C39.443 16.7244 39.5226 16.1364 39.5226 15.4545C39.5226 14.767 39.443 14.179 39.2839 13.6903C39.1249 13.196 38.9004 12.8153 38.6107 12.5483C38.3209 12.2812 37.9771 12.1477 37.5794 12.1477C37.1589 12.1477 36.7982 12.2812 36.497 12.5483C36.1959 12.8153 35.9658 13.196 35.8067 13.6903C35.6476 14.179 35.568 14.767 35.568 15.4545C35.568 16.1364 35.6476 16.7244 35.8067 17.2188C35.9658 17.7131 36.1959 18.0937 36.497 18.3608C36.7982 18.6278 37.1589 18.7614 37.5794 18.7614ZM49.743 4.54545V22H45.0385V4.54545H49.743ZM54.4531 22V4.54545H66.7259V8.36364H59.1918V11.3636H65.9759V15.1818H59.1918V22H54.4531ZM67.0557 22V8.90909H71.6239V11.3977H71.7602C71.9989 10.4773 72.3767 9.80398 72.8938 9.37784C73.4165 8.9517 74.0273 8.73864 74.7261 8.73864C74.9307 8.73864 75.1324 8.75568 75.3313 8.78977C75.5358 8.81818 75.7318 8.8608 75.9193 8.91761V12.9318C75.6864 12.8523 75.3994 12.7926 75.0585 12.7528C74.7176 12.7131 74.425 12.6932 74.1807 12.6932C73.7205 12.6932 73.3057 12.7983 72.9364 13.0085C72.5727 13.2131 72.2858 13.5028 72.0756 13.8778C71.8653 14.2472 71.7602 14.6818 71.7602 15.1818V22H67.0557ZM81.7847 22.2386C80.3869 22.2386 79.1824 21.9716 78.171 21.4375C77.1653 20.8977 76.3898 20.125 75.8443 19.1193C75.3045 18.108 75.0347 16.8977 75.0347 15.4886C75.0347 14.1364 75.3074 12.9545 75.8528 11.9432C76.3983 10.9318 77.1682 10.1449 78.1625 9.58239C79.1568 9.01989 80.3301 8.73864 81.6824 8.73864C82.671 8.73864 83.5659 8.89205 84.367 9.19886C85.1682 9.50568 85.8528 9.9517 86.421 10.5369C86.9892 11.1165 87.4267 11.821 87.7335 12.6506C88.0403 13.4801 88.1937 14.4148 88.1937 15.4545V16.5455H76.5006V13.9545H83.8642C83.8585 13.5795 83.7619 13.25 83.5744 12.9659C83.3926 12.6761 83.1455 12.4517 82.833 12.2926C82.5261 12.1278 82.1767 12.0455 81.7847 12.0455C81.404 12.0455 81.0545 12.1278 80.7364 12.2926C80.4182 12.4517 80.1625 12.6733 79.9693 12.9574C79.7818 13.2415 79.6824 13.5739 79.671 13.9545V16.75C79.671 17.1705 79.7591 17.5455 79.9352 17.875C80.1114 18.2045 80.3642 18.4631 80.6937 18.6506C81.0233 18.8381 81.421 18.9318 81.8869 18.9318C82.2108 18.9318 82.5062 18.8864 82.7733 18.7955C83.046 18.7045 83.279 18.5739 83.4722 18.4034C83.6653 18.2273 83.8074 18.017 83.8983 17.7727H88.1937C88.046 18.6818 87.6966 19.4716 87.1455 20.142C86.5943 20.8068 85.8642 21.3239 84.9551 21.6932C84.0517 22.0568 82.9949 22.2386 81.7847 22.2386ZM95.1862 22.2386C93.7885 22.2386 92.584 21.9716 91.5726 21.4375C90.5669 20.8977 89.7913 20.125 89.2459 19.1193C88.7061 18.108 88.4362 16.8977 88.4362 15.4886C88.4362 14.1364 88.709 12.9545 89.2544 11.9432C89.7999 10.9318 90.5697 10.1449 91.5641 9.58239C92.5584 9.01989 93.7317 8.73864 95.084 8.73864C96.0726 8.73864 96.9675 8.89205 97.7686 9.19886C98.5697 9.50568 99.2544 9.9517 99.8226 10.5369C100.391 11.1165 100.828 11.821 101.135 12.6506C101.442 13.4801 101.595 14.4148 101.595 15.4545V16.5455H89.9021V13.9545H97.2658C97.2601 13.5795 97.1635 13.25 96.976 12.9659C96.7942 12.6761 96.547 12.4517 96.2345 12.2926C95.9277 12.1278 95.5783 12.0455 95.1862 12.0455C94.8055 12.0455 94.4561 12.1278 94.1379 12.2926C93.8197 12.4517 93.5641 12.6733 93.3709 12.9574C93.1834 13.2415 93.084 13.5739 93.0726 13.9545V16.75C93.0726 17.1705 93.1607 17.5455 93.3368 17.875C93.5129 18.2045 93.7658 18.4631 94.0953 18.6506C94.4249 18.8381 94.8226 18.9318 95.2885 18.9318C95.6124 18.9318 95.9078 18.8864 96.1749 18.7955C96.4476 18.7045 96.6805 18.5739 96.8737 18.4034C97.0669 18.2273 97.209 18.017 97.2999 17.7727H101.595C101.448 18.6818 101.098 19.4716 100.547 20.142C99.9959 20.8068 99.2658 21.3239 98.3567 21.6932C97.4533 22.0568 96.3965 22.2386 95.1862 22.2386ZM105.828 22V4.54545H118.101V8.36364H110.567V11.3636H117.351V15.1818H110.567V22H105.828ZM124.058 22.2386C122.637 22.2386 121.421 21.9574 120.41 21.3949C119.399 20.8267 118.623 20.0369 118.083 19.0256C117.544 18.0085 117.274 16.8295 117.274 15.4886C117.274 14.1477 117.544 12.9716 118.083 11.9602C118.623 10.9432 119.399 10.1534 120.41 9.59091C121.421 9.02273 122.637 8.73864 124.058 8.73864C125.478 8.73864 126.694 9.02273 127.706 9.59091C128.717 10.1534 129.492 10.9432 130.032 11.9602C130.572 12.9716 130.842 14.1477 130.842 15.4886C130.842 16.8295 130.572 18.0085 130.032 19.0256C129.492 20.0369 128.717 20.8267 127.706 21.3949C126.694 21.9574 125.478 22.2386 124.058 22.2386ZM124.092 18.7614C124.49 18.7614 124.833 18.6278 125.123 18.3608C125.413 18.0937 125.637 17.7131 125.796 17.2188C125.956 16.7244 126.035 16.1364 126.035 15.4545C126.035 14.767 125.956 14.179 125.796 13.6903C125.637 13.196 125.413 12.8153 125.123 12.5483C124.833 12.2812 124.49 12.1477 124.092 12.1477C123.671 12.1477 123.311 12.2812 123.01 12.5483C122.708 12.8153 122.478 13.196 122.319 13.6903C122.16 14.179 122.081 14.767 122.081 15.4545C122.081 16.1364 122.16 16.7244 122.319 17.2188C122.478 17.7131 122.708 18.0937 123.01 18.3608C123.311 18.6278 123.671 18.7614 124.092 18.7614ZM136.256 14.6364V22H131.551V8.90909H136.017V11.3977H136.153C136.437 10.5682 136.937 9.91761 137.653 9.44602C138.375 8.97443 139.216 8.73864 140.176 8.73864C141.102 8.73864 141.906 8.9517 142.588 9.37784C143.275 9.7983 143.807 10.3778 144.182 11.1165C144.562 11.8551 144.75 12.6989 144.744 13.6477V22H140.04V14.6364C140.045 13.9886 139.881 13.4801 139.545 13.1108C139.216 12.7415 138.756 12.5568 138.165 12.5568C137.778 12.5568 137.44 12.642 137.15 12.8125C136.866 12.9773 136.648 13.2159 136.494 13.5284C136.341 13.8352 136.261 14.2045 136.256 14.6364ZM153.673 8.90909V12.3182H145.048V8.90909H153.673ZM146.719 5.77273H151.423V17.7898C151.423 17.9716 151.455 18.125 151.517 18.25C151.58 18.3693 151.676 18.4602 151.807 18.5227C151.938 18.5795 152.105 18.608 152.31 18.608C152.452 18.608 152.617 18.5909 152.804 18.5568C152.997 18.5227 153.139 18.4943 153.23 18.4716L153.912 21.7784C153.702 21.8409 153.401 21.9176 153.009 22.0085C152.622 22.0994 152.162 22.1591 151.628 22.1875C150.548 22.2443 149.642 22.1335 148.909 21.8551C148.176 21.571 147.625 21.125 147.256 20.517C146.886 19.9091 146.708 19.1477 146.719 18.233V5.77273ZM166.218 13.1705H161.889C161.866 12.9034 161.772 12.6733 161.608 12.4801C161.443 12.2869 161.23 12.1392 160.968 12.0369C160.713 11.929 160.429 11.875 160.116 11.875C159.713 11.875 159.366 11.9489 159.076 12.0966C158.787 12.2443 158.645 12.4545 158.65 12.7273C158.645 12.9205 158.727 13.0994 158.897 13.2642C159.074 13.429 159.412 13.5568 159.912 13.6477L162.571 14.125C163.912 14.3693 164.909 14.7812 165.562 15.3608C166.221 15.9347 166.554 16.7045 166.559 17.6705C166.554 18.6023 166.275 19.4119 165.724 20.0994C165.179 20.7812 164.432 21.3097 163.483 21.6847C162.539 22.054 161.463 22.2386 160.253 22.2386C158.253 22.2386 156.687 21.8295 155.557 21.0114C154.432 20.1932 153.804 19.1136 153.673 17.7727H158.343C158.406 18.1875 158.611 18.5085 158.957 18.7358C159.309 18.9574 159.753 19.0682 160.287 19.0682C160.718 19.0682 161.074 18.9943 161.352 18.8466C161.636 18.6989 161.781 18.4886 161.787 18.2159C161.781 17.9659 161.656 17.767 161.412 17.6193C161.173 17.4716 160.798 17.3523 160.287 17.2614L157.968 16.8523C156.633 16.6193 155.633 16.1761 154.968 15.5227C154.304 14.8693 153.974 14.0284 153.98 13C153.974 12.0909 154.213 11.321 154.696 10.6903C155.184 10.054 155.88 9.57102 156.784 9.24148C157.693 8.90625 158.77 8.73864 160.014 8.73864C161.906 8.73864 163.397 9.13068 164.488 9.91477C165.585 10.6989 166.162 11.7841 166.218 13.1705Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
};

export default Logo;
