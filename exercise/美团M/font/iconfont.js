;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.017114 49.78487c73.727165 0 140.500964 29.901007 188.841949 78.238922 48.336892 48.337915 78.235852 115.112738 78.235852 188.840926 0 73.728188-29.898961 140.525524-78.235852 188.841949-12.112875 12.109806-25.369807 23.052019-39.61116 32.656771 56.417941 21.341051 107.073644 54.392818 148.999522 96.196922 76.444043 76.274174 123.739209 181.554986 123.739209 297.729915 0 20.068058-16.285918 36.352953-36.376489 36.352953-20.062941 0-36.348859-16.284895-36.348859-36.352953 0-96.256274-39.048341-183.349865-102.168937-246.302639-63.101153-62.933331-150.297075-101.917204-246.638283-102.041024l-0.436952 0-0.021489 0-0.416486 0c-96.384188 0.12382-183.580109 39.107693-246.659773 102.041024-63.122643 62.953797-102.167914 150.046365-102.167914 246.302639 0 20.068058-16.286941 36.352953-36.373419 36.352953-20.066011 0-36.351929-16.284895-36.351929-36.352953 0-116.174929 47.294143-221.455741 123.757628-297.729915 41.884946-41.804105 92.540649-74.854848 148.960637-96.196922-14.220886-9.603729-27.479865-20.546965-39.590694-32.656771-48.317449-48.316425-78.216409-115.113761-78.216409-188.841949 0-73.728188 29.898961-140.503011 78.216409-188.840926C370.491591 79.685877 437.26846 49.78487 511.017114 49.78487L511.017114 49.78487zM648.428717 179.452091c-35.161824-35.161824-83.751473-56.94085-137.411603-56.94085-53.662177 0-102.272291 21.779026-137.434116 56.94085s-56.941873 83.751473-56.941873 137.412626c0 53.662177 21.780049 102.250802 56.941873 137.435139 35.0554 35.057447 83.500762 56.793494 136.995117 56.919361l0.416486 0 0.021489 0 0.416486 0c53.494355-0.125867 101.935624-21.861914 136.995117-56.919361 35.161824-35.183314 56.939827-83.772962 56.939827-137.435139C705.368544 263.203564 683.590542 214.613916 648.428717 179.452091z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M531.084149 807.266817 117.998973 182.598758 947.274036 182.598758Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M524.8 774.4l492.8-486.4C1024 281.6 1024 268.8 1017.6 256c-6.4-6.4-19.2-6.4-25.6 0L512 729.6 32 249.6c-6.4-6.4-19.2-6.4-25.6 0C0 256 0 262.4 0 268.8s0 12.8 6.4 12.8l492.8 492.8C505.6 780.8 518.4 780.8 524.8 774.4L524.8 774.4zM524.8 774.4"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-meishi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M427.890759 255.505655c0-89.705931-60.221793-232.448-134.497103-232.448C219.118345 23.07531 158.896552 165.799724 158.896552 255.505655c0 89.705931 60.221793 162.427586 134.497103 162.427586C367.668966 417.933241 427.890759 345.211586 427.890759 255.505655z"  ></path>' +
    '' +
    '<path d="M276.497655 422.152828l-4.837517 553.984c0 9.198345 4.148966 16.754759 9.198345 16.754759l25.05269 0c5.067034 0 9.198345-7.556414 9.198345-16.754759l-4.819862-553.984c-5.526069 0.865103-11.140414 1.465379-16.913655 1.465379C287.638069 423.618207 282.023724 423.017931 276.497655 422.152828z"  ></path>' +
    '' +
    '<path d="M847.36 1002.725517l-25.05269 0c-5.067034 0-9.198345-11.29931-9.198345-25.105655l5.455448-934.859034C818.546759 28.954483 822.660414 17.655172 827.745103 17.655172l14.212414 0c5.049379 0 9.198345 11.29931 9.198345 25.105655l5.420138 934.859034C856.576 991.426207 852.427034 1002.725517 847.36 1002.725517z"  ></path>' +
    '' +
    '<path d="M703.629241 1002.725517l-25.070345 0c-5.067034 0-9.198345-11.29931-9.198345-25.105655l5.420138-934.859034C674.798345 28.954483 678.94731 17.655172 683.99669 17.655172l14.212414 0c5.031724 0 9.18069 11.29931 9.18069 25.105655l5.437793 934.859034C712.809931 991.426207 708.696276 1002.725517 703.629241 1002.725517z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiudian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M997.587862 964.413793 17.355034 964.413793c-9.586759 0-17.355034-7.891862-17.355034-17.655172s7.768276-17.655172 17.355034-17.655172l980.232828 0c9.586759 0 17.337379 7.891862 17.337379 17.655172S1007.174621 964.413793 997.587862 964.413793z"  ></path>' +
    '' +
    '<path d="M521.992828 946.705655 173.921103 946.705655c-31.938207 0-57.908966-26.429793-57.908966-58.932966L116.012138 102.87669c0-32.485517 25.970759-58.91531 57.908966-58.91531l348.071724 0c31.938207 0 57.944276 26.429793 57.944276 58.91531l0 784.913655C579.937103 920.275862 553.931034 946.705655 521.992828 946.705655zM173.921103 79.254069c-12.8 0-23.198897 10.593103-23.198897 23.604966l0 784.913655c0 13.011862 10.416552 23.622621 23.198897 23.622621l348.071724 0c12.8 0 23.234207-10.610759 23.234207-23.622621L545.227034 102.87669c0-13.011862-10.434207-23.604966-23.234207-23.604966L173.921103 79.271724z"  ></path>' +
    '' +
    '<path d="M839.503448 950.784 603.136 950.784c-31.938207 0-57.908966-26.429793-57.908966-58.932966l0-559.13931c0-32.485517 25.988414-58.91531 57.908966-58.91531L839.503448 273.796414c31.955862 0 57.926621 26.429793 57.926621 58.91531l0 559.13931C897.430069 924.336552 871.441655 950.784 839.503448 950.784zM603.136 309.089103c-12.8 0-23.198897 10.593103-23.198897 23.604966l0 559.13931c0 13.011862 10.416552 23.622621 23.198897 23.622621L839.503448 915.456c12.8 0 23.216552-10.610759 23.216552-23.622621l0-559.13931c0-13.011862-10.434207-23.604966-23.216552-23.604966L603.136 309.089103z"  ></path>' +
    '' +
    '<path d="M295.688828 289.792l-85.504 0c-21.46869 0-38.929655-17.778759-38.929655-39.618207L171.255172 163.222069C171.272828 141.364966 188.716138 123.586207 210.184828 123.586207l85.504 0c21.46869 0 38.94731 17.778759 38.94731 39.635862l0 86.951724C334.636138 272.013241 317.157517 289.792 295.688828 289.792zM210.184828 141.241379c-11.881931 0-21.574621 9.851586-21.574621 21.98069l0 86.951724c0 12.111448 9.675034 21.963034 21.574621 21.963034l85.504 0c11.899586 0 21.592276-9.851586 21.592276-21.963034L317.281103 163.222069C317.281103 151.092966 307.588414 141.241379 295.688828 141.241379L210.184828 141.241379z"  ></path>' +
    '' +
    '<path d="M488.748138 289.792l-91.542069 0c-19.809103 0-35.910621-16.384-35.910621-36.528552L361.295448 160.114759C361.295448 139.970207 377.396966 123.586207 397.206069 123.586207l91.542069 0c19.809103 0 35.910621 16.384 35.910621 36.528552l0 93.131034C524.658759 273.408 508.557241 289.792 488.748138 289.792zM397.206069 141.241379c-10.24 0-18.555586 8.456828-18.555586 18.873379l0 93.131034c0 10.416552 8.333241 18.873379 18.555586 18.873379l91.542069 0c10.24 0 18.555586-8.456828 18.555586-18.873379L507.303724 160.114759c0-10.416552-8.333241-18.873379-18.555586-18.873379L397.206069 141.241379z"  ></path>' +
    '' +
    '<path d="M299.078621 484.228414l-92.248276 0c-19.614897 0-35.557517-16.225103-35.557517-36.175448l0-93.837241c0-19.950345 15.942621-36.175448 35.557517-36.175448l92.248276 0c19.597241 0 35.539862 16.225103 35.539862 36.175448l0 93.837241C334.618483 467.985655 318.675862 484.228414 299.078621 484.228414zM206.830345 335.677793c-10.028138 0-18.202483 8.315586-18.202483 18.520276l0 93.837241c0 10.222345 8.174345 18.520276 18.202483 18.520276l92.248276 0c10.028138 0 18.184828-8.315586 18.184828-18.520276l0-93.837241c0-10.222345-8.15669-18.520276-18.184828-18.520276L206.830345 335.677793z"  ></path>' +
    '' +
    '<path d="M488.077241 484.228414l-90.182621 0c-20.179862 0-36.599172-16.701793-36.599172-37.217103l0-91.753931c0-20.532966 16.41931-37.234759 36.599172-37.234759l90.182621 0c20.162207 0 36.581517 16.701793 36.581517 37.234759l0 91.753931C524.641103 467.526621 508.239448 484.228414 488.077241 484.228414zM397.894621 335.677793c-10.610759 0-19.244138 8.792276-19.244138 19.579586l0 91.753931c0 10.78731 8.633379 19.561931 19.244138 19.561931l90.182621 0c10.610759 0 19.226483-8.774621 19.226483-19.561931l0-91.753931c0-10.78731-8.615724-19.579586-19.226483-19.579586L397.894621 335.677793z"  ></path>' +
    '' +
    '<path d="M301.285517 690.564414l-96.697379 0c-18.379034 0-33.332966-15.218759-33.332966-33.933241L171.255172 558.256552c0-18.696828 14.953931-33.897931 33.332966-33.897931l96.697379 0c18.379034 0 33.332966 15.201103 33.332966 33.897931l0 98.374621C334.618483 675.345655 319.664552 690.564414 301.285517 690.564414zM204.605793 542.013793c-8.809931 0-15.977931 7.291586-15.977931 16.242759l0 98.374621c0 8.986483 7.168 16.278069 15.977931 16.278069l96.697379 0c8.809931 0 15.977931-7.291586 15.977931-16.278069L317.281103 558.256552c0-8.951172-7.168-16.242759-15.977931-16.242759L204.605793 542.013793z"  ></path>' +
    '' +
    '<path d="M491.04331 690.564414l-96.132414 0c-18.537931 0-33.633103-15.342345-33.633103-34.215724l0-97.809655c0-18.838069 15.077517-34.180414 33.633103-34.180414l96.132414 0c18.537931 0 33.597793 15.32469 33.597793 34.180414l0 97.809655C524.641103 675.222069 509.581241 690.564414 491.04331 690.564414zM394.910897 542.013793c-8.968828 0-16.278069 7.415172-16.278069 16.525241l0 97.809655c0 9.145379 7.309241 16.560552 16.278069 16.560552l96.132414 0c8.968828 0 16.242759-7.432828 16.242759-16.560552l0-97.809655c0-9.110069-7.291586-16.525241-16.242759-16.525241L394.910897 542.013793z"  ></path>' +
    '' +
    '<path d="M697.396966 494.11531l-72.474483 0c-12.058483 0-21.857103-10.010483-21.857103-22.298483l0-73.728c0-12.288 9.816276-22.298483 21.857103-22.298483l72.474483 0c12.111448 0 21.927724 10.010483 21.927724 22.298483l0 73.728C719.32469 484.104828 709.508414 494.11531 697.396966 494.11531zM624.922483 393.445517c-2.489379 0-4.519724 2.08331-4.519724 4.64331l0 73.728c0 2.56 2.030345 4.64331 4.519724 4.64331l72.474483 0c2.542345 0 4.590345-2.08331 4.590345-4.64331l0-73.728c0-2.52469-2.100966-4.64331-4.590345-4.64331L624.922483 393.445517z"  ></path>' +
    '' +
    '<path d="M821.79531 494.11531l-63.699862 0c-14.494897 0-26.288552-12.005517-26.288552-26.747586l0-64.794483c0-14.759724 11.793655-26.782897 26.288552-26.782897l63.699862 0c14.477241 0 26.270897 12.005517 26.270897 26.782897l0 64.794483C848.066207 482.109793 836.272552 494.11531 821.79531 494.11531zM758.077793 393.445517c-4.925793 0-8.951172 4.096-8.951172 9.127724l0 64.794483c0 5.014069 4.025379 9.092414 8.951172 9.092414l63.699862 0c4.925793 0 8.933517-4.078345 8.933517-9.092414l0-64.794483c0-5.031724-4.007724-9.127724-8.933517-9.127724L758.077793 393.445517z"  ></path>' +
    '' +
    '<path d="M779.705379 920.787862c-9.586759 0-17.337379-7.891862-17.337379-17.655172L762.368 711.732966c0-6.814897-5.455448-12.340966-12.129103-12.340966l-66.824828 0c-6.708966 0-12.146759 5.526069-12.146759 12.340966l0 120.584828c0 9.76331-7.750621 17.655172-17.355034 17.655172-9.586759 0-17.337379-7.891862-17.337379-17.655172l0-120.584828c0-26.270897 21.02731-47.65131 46.856828-47.65131l66.824828 0c25.829517 0 46.821517 21.380414 46.821517 47.65131l0 191.417379C797.060414 912.896 789.309793 920.787862 779.705379 920.787862z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianying" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M725.57 439.043c-49.98 0-90.51 40.74-90.51 90.72 0 50.19 40.53 90.72 90.51 90.72 49.98 0 90.51-40.53 90.51-90.72 0-49.98-40.53-90.72-90.51-90.72M508.22 656.393c-49.98 0-90.51 40.53-90.51 90.51s40.53 90.51 90.51 90.51c49.98 0 90.51-40.53 90.51-90.51 0-49.98-40.53-90.51-90.51-90.51M472.1 529.763c0 19.95 16.17 35.91 36.12 35.91 20.16 0 36.33-15.96 36.33-35.91 0-19.74-16.17-35.91-36.33-35.91-19.95 0-36.12 16.17-36.12 35.91M508.22 222.323c-49.98 0-90.51 40.32-90.51 90.3s40.53 90.51 90.51 90.51c49.98 0 90.51-40.53 90.51-90.51 0-49.98-40.53-90.3-90.51-90.3M290.87 439.043c-49.98 0-90.51 40.74-90.51 90.72 0 50.19 40.53 90.72 90.51 90.72 49.98 0 90.51-40.53 90.51-90.72 0-49.98-40.53-90.72-90.51-90.72M742.58 874.163h95.76c17.43 0 31.71 15.96 31.71 35.91s-14.28 36.12-31.71 36.12h-316.89c-1.26 0-2.73-0.21-3.99-0.42-2.94 0-5.88 0.42-9.030 0.42-229.95 0-416.43-186.48-416.43-416.43 0-229.95 186.48-416.43 416.43-416.43 229.95 0 416.43 186.48 416.43 416.43 0 143.22-72.24 269.43-182.28 344.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ktv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M477.201 603.938c37.434 20.481 74.642 33.251 104.589 37.393l-191.142 274.986c-21.213 29.34-62.277 25.543-87.574 10.701l-30.628-17.834c-25.297-14.842-49.345-49.129-34.598-82.381l139.868-306.971c17.016 27.268 52.975 58.679 99.485 84.107M760 535.135c-37.775 43.721-76.457 63.166-116.047 66.043l-2.496-1.496c-28.359 7.363-85.759-9.204-145.2-44.872-59.895-35.898-104.703-77.203-111.396-107.463l-2.722-1.611c-16.562-35.553-19.398-78.238-2.949-131.165 38.569 51.43 96.535 102.861 168.001 144.742 73.621 43.031 148.376 68.344 212.809 75.822M805.488 469.092c-4.084 7.363-8.167 13.691-12.365 20.25-59.668-1.841-139.982-27.499-220.523-74.672-78.726-46.138-139.868-102.4-171.971-153.025 3.857-7.709 7.714-15.532 12.251-23.702 70.898-126.102 201.692-149.113 310.138-85.257 108.333 63.857 151.779 193.065 82.469 316.406z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaochikuaican" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M260.650667 501.628708 431.424 501.628708C431.424 501.738423 431.317333 501.738423 431.317333 501.848137 431.317333 550.232137 469.504 589.509852 516.544 589.509852 563.584 589.509852 601.664 550.232137 601.664 501.848137 601.664 501.738423 601.557333 501.738423 601.557333 501.628708L773.930667 501.628708C784.490667 501.628708 793.450667 505.907565 800.277333 514.245852 807.104 522.474423 809.770667 532.348708 808.064 542.990995L742.144 839.54871C739.370667 867.306426 713.130667 892.979565 672.917333 892.979565L361.557333 892.979565C310.250667 891.443565 295.210667 856.99328 292.437333 839.54871L226.517333 542.990995C224.810667 532.348708 227.477333 522.474423 234.304 514.245852 241.130667 505.907565 250.090667 501.628708 260.650667 501.628708L260.650667 501.628708ZM286.144 448.41728 285.824 448.41728C268.650667 448.41728 254.357333 435.909852 251.690667 418.46528L192.490667 222.954423C190.784 212.312137 193.557333 202.547565 200.384 194.318995 207.210667 186.090423 216.170667 181.811566 226.624 181.811566L226.944 181.811566C244.117333 181.811566 258.410667 194.428708 261.077333 211.87328L320.277333 407.274423C321.984 418.026423 319.210667 427.790995 312.384 436.019565 305.557333 444.248137 296.597333 448.41728 286.144 448.41728L286.144 448.41728ZM381.824 252.796708 381.610667 252.796708C381.610667 252.796708 381.610667 252.796708 381.504 252.796708L381.824 252.796708ZM399.210667 448.41728 399.424 448.41728 399.530667 448.41728 399.210667 448.41728ZM399.424 448.41728C382.144 448.41728 367.850667 435.580708 365.290667 418.026423L347.584 293.500708C346.090667 282.858423 348.864 273.203565 355.690667 265.084708 362.410667 257.075565 371.264 252.906423 381.610667 252.796708 398.997333 252.906423 413.290667 265.63328 415.744 283.187565L433.450667 407.71328C434.944 418.355565 432.277333 428.010423 425.450667 436.12928 418.624 444.248137 409.770667 448.41728 399.424 448.41728L399.424 448.41728ZM517.290667 449.075565C507.690667 449.075565 499.584 445.674423 492.757333 438.652708 486.037333 431.740708 482.624 423.402423 482.624 413.528137L482.624 216.920137C482.624 197.28128 498.090667 181.372709 517.290667 181.372709 536.384 181.372709 551.850667 197.28128 551.850667 216.920137L551.850667 413.528137C551.850667 423.402423 548.437333 431.740708 541.717333 438.652708 534.997333 445.674423 526.784 449.075565 517.290667 449.075565L517.290667 449.075565ZM662.037333 418.136137C659.477333 435.690423 645.077333 448.41728 627.797333 448.41728L627.370667 448.41728C616.917333 448.41728 608.064 444.248137 601.237333 436.12928 594.410667 428.010423 591.637333 418.245852 593.237333 407.603565L648.490667 158.332709C651.050667 140.778423 665.344 128.051566 682.730667 128.051566L683.050667 128.051566C693.504 128.051566 702.464 132.220709 709.290667 140.339566 716.117333 148.458423 718.784 158.222994 717.290667 168.86528L662.037333 418.136137ZM829.397333 261.464137 771.584 422.085852C767.530667 437.884708 754.197333 448.526995 738.304 448.526995L736.170667 448.526995C725.077333 448.526995 715.477333 443.699565 708.757333 434.702995 701.930667 425.596708 699.797333 414.954423 702.677333 403.87328L760.170667 243.251565C764.224 227.342995 777.664 216.700708 793.557333 216.700708L796.010667 216.700708C807.104 216.700708 816.597333 221.528137 823.424 230.634423 830.144 239.740708 832.277331 250.382995 829.397333 261.464137L829.397333 261.464137Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M860.393293 809.081139 660.006404 608.694249c40.983413-49.387827 65.721841-112.670106 65.721841-181.471075 0-156.733671-128.234593-284.969287-284.968264-284.969287-156.733671 0-284.968264 128.235616-284.968264 284.969287s128.234593 284.968264 284.968264 284.968264c68.800969 0 132.083248-24.738427 181.471075-65.721841l200.385866 200.38689c10.435677 10.435677 27.340695 10.435677 37.776372 0C870.811574 836.419787 870.811574 819.499419 860.393293 809.081139L860.393293 809.081139zM209.221604 427.223175c0-127.663588 103.873766-231.5394 231.538377-231.5394 127.666658 0 231.537354 103.874789 231.537354 231.5394 0 127.666658-103.870696 231.537354-231.537354 231.537354C313.095369 658.760528 209.221604 554.889833 209.221604 427.223175L209.221604 427.223175zM209.221604 427.223175"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiuxianyule" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M742.845 359.195l-259.81 239.009v220.443c106.361 3.904 185.388 26.282 185.388 53.42 0 29.805-96.386 29.805-219.242 29.805-122.761 0-219.434 0-219.434-29.805 0-27.043 79.602-49.326 185.579-53.42v-220.156l-260.194-239.296c-12.947-11.903-21.675-43.422 7.385-43.422l580.33 0.191c22.826 0 12.947 31.328 0 43.231M708.318 549.735c-19.469-1.809-33.759-18.854-31.937-38.185 1.822-19.235 18.99-33.519 38.555-31.614 3.932 0.381 7.865 0.573 11.796 0.573 68.285 0 123.815-55.135 123.815-122.742 0-67.703-55.53-122.742-123.815-122.742-30.69 0-60.037 11.141-82.863 31.519-14.482 12.95-36.828 11.808-49.967-2.571-13.043-14.38-11.892-36.564 2.59-49.516 35.869-31.995 82.096-49.516 130.241-49.516 107.319 0 194.594 86.463 194.594 192.827 0 106.365-87.275 192.827-194.594 192.827-6.234 0-12.372-0.286-18.414-0.857z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M746.112 130.848 335.3344 511.9744l410.7776 381.184c10.592 9.8048 10.592 25.4784 0 35.1616-10.4704 9.7408-27.3536 9.7408-37.824 0L302.8928 552.16c-35.7632-29.6512-23.6032-19.968-25.3568-21.664-5.504-5.0816-7.9296-11.8016-7.5648-18.5152-0.3648-6.656 2.0544-13.376 7.6224-18.4576 1.7536-1.696 54.8288-49.8048 56.8832-50.9568l373.8624-346.9376c10.4704-9.6832 27.3536-9.6832 37.824 0C756.704 105.4336 756.704 121.1072 746.112 130.848L746.112 130.848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-waimai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M144.701 667.85c0 37.477 32.006 67.807 71.463 67.807 39.499 0 71.506-30.329 71.506-67.807 0-37.477-32.006-67.807-71.506-67.807-39.456 0-71.463 30.329-71.463 67.807v0zM747.185 735.657c39.499 0 71.506-30.329 71.506-67.807s-32.006-67.807-71.506-67.807c-39.456 0-71.463 30.329-71.463 67.807 0 37.477 32.006 67.807 71.463 67.807v0zM683.979 445.009h71.209c2.256 0 4.682 0.525 7.066 0.889 1.915-0.243 3.747-0.889 5.702-0.889h119.135c39.456 0 95.299 59.65 95.299 96.961v15.67c0 24.554-28.56 22.817-64.91 22.533 14.853 26.009 23.411 55.691 23.411 87.393 0 101.649-86.702 184.071-193.707 184.071-73.763 0-137.863-39.213-170.593-96.882h-189.833c-32.772 57.668-97.002 96.882-170.892 96.882-107.173 0-194.047-82.426-194.047-184.071 0-61.95 32.433-116.429 81.891-149.788-1.106-4.725-1.788-9.611-1.788-14.66l44.862-70.916c-38.009-18.98-63.037-53.551-63.037-84.404v-24.231c0-40.142 33.754-72.651 75.337-72.651h154.89c31.795-32.629 85.551-70.028 112.368-55.326 34.307 18.78 22.602 68.976 8.853 100.355l-24.985 59.969v16.113c0 33.157-23.111 60.779-54.61 69.421-34.901 122.569 98.236 187.020 184.724 95.793 2.98-4.885 5.66-10.054 7.872-15.385 0.382 0.324 0.554 0.484 0.511 0.405 30.348-65.18 105.855-75.679 135.266-77.258v0zM926.545 386.573h-277.301c-41.798 0-75.635-30.734-75.635-68.614v-114.37c0-37.921 33.84-68.654 75.635-68.654h277.301c41.756 0 75.635 30.734 75.635 68.654v114.37c0 37.883-33.882 68.614-75.635 68.614v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.447746 666.586774c-0.608867-10.934027-9.740852-19.460214-20.664645-19.330254-1.020236 0.01228-2.025123 0.017396-3.028986 0.017396-42.863227 0-71.240531-10.467399-84.35727-31.127951-21.0095-33.092699-1.50426-90.152253 7.770987-109.314685 0.254803-0.521886 0.487094-1.055029 0.696872-1.596358 0.663102-1.716084 16.244986-42.683125 15.702634-99.41829-0.503467-52.643987-15.46625-129.520889-83.887572-196.801225-41.290405-40.60172-84.822874-59.121516-129.367393-55.060013-51.02307 4.65809-89.071641 38.190811-107.806331 58.603723-92.369757-61.377906-177.837314-85.420485-254.251681-71.469752-81.638345 14.905478-123.706463 68.661799-130.426515 77.932953-26.116821 29.570479-36.878932 68.654636-31.127951 113.12343 2.685155 20.763906 8.425903 38.183647 12.375865 48.372707-8.005324 14.21577-30.190603 45.606711-72.67623 52.078099-6.810103 1.037632-12.641925 5.431709-15.516392 11.691273-2.87549 6.259564-2.407839 13.546527 1.243317 19.388583 2.064009 3.302209 17.934464 27.801183 42.931788 42.09984-2.784416 14.367219-6.294356 36.300764-7.390317 59.948347-2.743484 59.169611 10.880815 98.626251 40.494273 117.271914 27.107381 17.066701 64.512293 22.452361 111.177102 16.001439 33.151028-4.582365 58.973136-13.644765 60.055794-14.028505 0.466628-0.164752 0.927115-0.346901 1.38044-0.545422 0.084934-0.037862 9.271154-3.323699 19.888979 3.868097 14.452153 9.785877 47.485501 50.366108 42.104957 215.384465-0.36839 11.2973 8.490372 20.753673 19.787672 21.123087 0.227174 0.008186 0.453325 0.011256 0.679475 0.011256 10.994402 0 20.082384-8.728802 20.443611-19.798928 2.411933-73.954339-2.403746-133.055388-14.312984-175.663812-10.058077-35.985586-25.450648-61.20292-45.749974-74.947969-27.055193-18.321274-52.382021-10.18906-58.261938-7.882528-25.154913 8.765641-97.30414 25.816992-135.382387 1.840928C127.834992 628.122741 138.325927 538.845415 148.438239 498.79321c2.720971-10.725272-3.575432-21.672602-14.21577-24.711821-6.451946-1.843998-12.71151-5.845125-18.251689-10.502192 52.879348-22.697955 73.566506-72.207555 74.572416-74.687026 2.186805-5.38873 2.00261-11.401678-0.549515-16.626679-0.366344-0.760317-36.081777-76.604702 9.076726-126.781498 0.624217-0.692778 1.199315-1.428535 1.723248-2.199085 0.331551-0.488117 33.965579-48.995901 104.812137-61.931514 69.50091-12.69002 149.897985 12.665461 238.9553 75.362408 4.442172 3.127224 9.942443 4.359284 15.300474 3.426029 5.352915-0.934279 10.114358-3.959172 13.235442-8.407484 0.36532-0.520863 37.133735-52.104705 90.936105-57.016575 32.012088-2.926656 64.632019 11.706623 96.947006 43.48335 46.538943 45.763276 70.63985 101.777011 71.63655 166.485779 0.705058 45.850258-11.000542 80.394005-12.721743 85.21173-4.938476 10.526751-40.871873 91.560322-5.13802 148.056034 18.426675 29.132504 51.313689 45.711088 97.943706 49.440016-4.306072 10.414187-11.991102 21.883403-22.188348 32.708959-19.081591 20.255323-44.527123 36.207643-69.809949 43.764759-33.910321 10.131755-81.501222 9.841136-115.671463-49.104371-45.240367-78.040401-26.641777-111.688755-0.901533-158.258397 20.144806-36.446074 45.215808-81.804121 40.456411-154.138566-3.451612-52.465932-20.831444-86.682221-51.656497-101.700263-23.184025-11.295254-51.77213-10.629081-84.9733 1.979074-22.881127 8.688893-39.917128 20.2236-40.630373 20.710694-7.408737 5.051039-10.666944 14.337543-8.037047 22.909779 0.11461 0.373507 11.537777 37.816281 19.930935 81.750909 14.114462 73.891917 8.149611 103.760179 3.338025 114.987894-20.228717 47.199998-79.08622 63.87375-79.620385 64.021106-7.840572 2.106987-13.694907 8.648984-14.920828 16.674775-0.537236 3.515057-11.965519 86.933955 91.188862 160.936389 9.184173 6.588045 21.970384 4.484128 28.559453-4.700045 6.588045-9.185196 4.484128-21.971407-4.700045-28.559453-34.039257-24.419156-57.70833-53.264111-68.447928-83.415828-3.823072-10.732435-5.392824-19.914562-5.986341-26.596751 24.156166-9.598612 70.736041-33.675984 91.548042-82.235956 11.988032-27.972075 11.741415-73.371054-0.7552-138.792043-5.53711-28.991288-12.219299-54.918797-16.540721-70.573335 19.553335-10.396791 51.249221-22.514783 72.172763-12.272511 20.702508 10.132778 27.02654 42.334177 28.686343 67.563792 3.971451 60.353576-16.062837 96.599082-35.437094 131.650389-13.767562 24.909319-28.003797 50.665936-31.154557 82.355683-3.486404 35.07075 6.830569 72.004941 32.468482 116.231211 19.524682 33.6811 45.061288 56.305377 75.899644 67.24759 26.544563 9.417487 56.594973 9.605775 86.905302 0.546446 31.978319-9.55768 64.009849-29.572526 87.88256-54.914704C945.683818 721.232348 958.873212 692.258457 957.447746 666.586774z"  ></path>' +
    '' +
    '<path d="M276.22667 251.509221c-20.315698 14.220886-27.904537 31.954783-28.217668 32.702819-2.181689 5.212722 0.261966 11.238972 5.475711 13.420661 1.298576 0.543376 2.6432 0.801249 3.966335 0.801249 3.989871 0 7.772011-2.344395 9.411347-6.258541 0.958838-2.209318 24.438599-53.866838 106.984616-33.227776 5.481851 1.367137 11.038404-1.962701 12.409634-7.445576 1.370207-5.482875-1.962701-11.038404-7.445576-12.408611C327.14127 226.175229 294.504966 238.7138 276.22667 251.509221z"  ></path>' +
    '' +
    '<path d="M424.676677 258.500449m-10.391674 0a10.155 10.155 0 1 0 20.783349 0 10.155 10.155 0 1 0-20.783349 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M810 140c12 0 23.156 2.172 33.5 6.5 10.329 4.343 19.5 10.5 27.5 18.5 7.328 8 13.328 17.172 18 27.5 4.656 10.343 7.001 21.172 7.001 32.5l0 598c0 11.344-2.343 22.172-7.001 32.5-4.672 10.343-10.672 19.5-18 27.5-8 8-17.172 14.172-27.5 18.5-10.343 4.343-21.5 6.5-33.5 6.5l-596.999 0c-12 0-23.172-2.156-33.5-6.5-10.343-4.329-19.172-10.5-26.5-18.5-8-8-14.172-17.156-18.5-27.5-4.343-10.329-6.5-21.156-6.5-32.5l0-598c0-11.328 2.156-22.156 6.5-32.5 4.329-10.329 10.5-19.5 18.5-27.5 7.328-8 16.156-14.156 26.5-18.5 10.329-4.329 21.5-6.5 33.5-6.5l596.999 0zM796 823.001l0-598-566.999 0 0 598 64 0 0-27.001 436 0 0 27.001 66.999 0zM304 740l-12 0 0-456.999 437.001 0 0 457.001-425.001 0zM332 444l185.001 0 0 1.001-1.001 0c-13.344 17.344-28 34-44 50s-32.672 31.344-50 46c-17.344 14-34.844 27.001-52.5 39.001-17.671 12-35.172 22.343-52.5 31.001 3.328 3.344 7.001 6.844 11.001 10.5 4 3.671 8 7.5 12 11.5 3.328 4 6.656 7.844 10 11.5 3.328 3.671 6 7.172 8 10.5 15.328-8.656 30.828-18.156 46.5-28.5 15.657-10.329 31.156-21.5 46.5-33.5 15.328-12 30.329-24.828 45.001-38.5 14.656-13.657 28.656-27.828 42-42.5l0 129.001c0 2-0.172 3.844-0.5 5.5-0.343 1.671-0.844 2.844-1.5 3.5-1.344 0.672-2.672 1.172-4 1.5-1.344 0.343-3.001 0.5-5.001 0.5-2 0.672-5.172 1.001-9.5 1.001-4.343 0-9.5 0-15.5 0-5.344 0-11.5-0.156-18.5-0.5-7.001-0.329-14.172-0.5-21.5-0.5 2 4 4 8.343 6 13.001 2 4.672 4 9.671 6 15.001 2 4.672 3.828 9.5 5.5 14.5 1.657 5.001 2.828 9.5 3.5 13.5 10.656 0 20.5 0 29.5 0s17.156-0.656 24.5-2c7.328-0.656 14-1.657 20-3.001 6-1.328 11.657-3.328 17.001-6 4.656-2 8.656-4.656 12-8 3.328-3.328 6-7.001 8-11.001 2-4.656 3.5-10 4.5-16s1.5-12.656 1.5-20l0-187.001 0-11.001 94 0 0-55.001-94 0 0-81.001-62 0 0 81.001-206.001 0 0 55.001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 1024 170.666667 1024C76.416 1024 0 947.584 0 853.333333L0 170.666667C0 76.416 76.416 0 170.666667 0L853.333333 0C947.584 0 1024 76.416 1024 170.666667L1024 853.333333C1024 947.584 947.584 1024 853.333333 1024ZM338.944 245.973333C345.941333 227.968 355.456 209.962667 367.445333 191.957333 341.418667 185.984 317.44 178.005333 295.424 167.978667 283.434667 217.984 271.445333 259.968 259.456 293.973333 247.424 327.978667 231.936 361.472 212.949333 394.453333 193.92 427.477333 167.424 459.989333 133.461333 491.946667 153.429333 505.984 168.405333 519.978667 178.432 533.973333 208.426667 502.016 232.917333 469.973333 251.946667 437.973333 270.933333 406.016 286.464 377.002667 298.453333 350.976L433.450667 350.976C427.434667 382.976 420.394667 413.952 412.458667 443.946667 404.437333 473.984 393.429333 502.997333 379.434667 530.986667 357.418667 512.981333 326.442667 487.978667 286.464 455.978667 274.432 471.978667 261.418667 485.973333 247.424 497.962667 289.450667 527.957333 323.413333 556.970667 349.44 584.96 331.434667 619.008 302.421333 654.464 262.442667 691.456 222.421333 728.490667 179.413333 756.992 133.461333 776.96 155.434667 784.938667 173.44 799.957333 187.434667 821.973333 235.434667 791.978667 276.394667 759.466667 310.442667 724.48 344.448 689.493333 373.930667 652.970667 398.933333 614.954667 423.936 576.981333 444.928 532.992 461.952 482.986667 478.933333 432.981333 492.416 371.968 502.442667 299.946667L316.458667 299.946667C324.394667 281.984 331.904 263.978667 338.944 245.973333ZM616.448 161.962667 550.442667 161.962667C552.405333 193.962667 553.429333 226.005333 553.429333 257.962667L553.429333 719.957333C553.429333 757.973333 552.405333 796.928 550.442667 836.949333L616.448 836.949333C614.442667 796.928 613.461333 757.973333 613.461333 719.957333L613.461333 257.962667C613.461333 226.005333 614.442667 193.962667 616.448 161.962667ZM749.952 454.485333C714.922667 413.482667 688.426667 382.976 670.464 362.965333 652.458667 374.954667 637.44 386.986667 625.450667 398.976 651.434667 427.008 680.448 460.970667 712.448 500.949333 744.405333 541.013333 769.450667 576.981333 787.456 608.981333 801.408 594.986667 818.432 581.973333 838.442667 569.984 814.464 533.973333 784.896 495.488 749.952 454.485333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhoubianyou" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512.255821 0C229.727191 0 0.61397 229.113221 0.61397 511.744179s229.113221 511.744179 511.744179 511.744179 511.744179-229.113221 511.744179-511.744179S794.886779 0 512.255821 0zM368.996103 267.691016c41.647647 0 75.416009 33.768362 75.416009 75.518337 0 41.647647-33.768362 75.518337-75.416009 75.518337-41.749975 0-75.518337-33.870691-75.518337-75.518337C293.477766 301.459378 327.246128 267.691016 368.996103 267.691016zM790.793644 683.655841c-8.697911 15.553912-23.637854 24.558809-41.136005 24.558809L267.998001 708.21465c-18.21445 0-25.377436-6.753672-32.847407-21.898271-7.879285-16.065554-4.40012-39.396423 6.037374-54.64335L346.995503 506.627761c29.061257-35.507944 61.397022-32.847407 85.546517-5.730389 15.758569 17.702808 41.954632 48.605976 41.954632 48.605976 11.051464 9.925852 24.149495 19.647047 38.884781 19.647047 14.4283 0 25.889078-18.726092 33.25672-31.619466l64.05756-97.007295c8.697911-15.246927 21.693614-24.047167 39.089437-24.047167 17.293495-0.102328 33.973019 8.595583 42.773259 23.740182l97.92825 195.8565C799.286899 651.627061 799.491556 668.204257 790.793644 683.655841z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hcpyd" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M881.938385 877.707636 141.958749 877.707636C128.693295 877.707636 118.290385 866.816 118.732567 853.364364L140.236567 194.839273C141.120931 168.029091 162.392204 140.660364 187.992204 133.864727 187.992204 133.864727 304.402385 100.957091 408.361658 83.595636 419.835113 35.607273 462.238022 0 512.763113 0 563.614022 0 606.226385 36.049455 617.374022 84.503273 721.612567 102.120727 835.928204 134.050909 835.928204 134.050909 861.41184 140.8 882.799476 168.168727 883.660567 194.839273L905.164567 853.364364C905.606749 866.816 895.413295 877.707636 881.938385 877.707636ZM512.763113 48.756364C479.785658 48.756364 453.068567 76.055273 453.068567 109.707636 453.068567 143.383273 479.785658 170.658909 512.763113 170.658909 545.740567 170.658909 572.457658 143.383273 572.457658 109.707636 572.457658 76.055273 545.740567 48.756364 512.763113 48.756364ZM810.142022 232.727273C810.142022 205.684364 790.057658 186.181818 763.596567 186.181818L251.596567 186.181818C225.112204 186.181818 205.051113 205.754182 205.051113 232.727273L205.051113 442.181818C205.051113 469.224727 225.112204 488.727273 251.596567 488.727273L763.922385 488.727273C790.406749 488.727273 810.142022 469.154909 810.142022 442.181818L810.142022 232.727273ZM810.142022 581.818182C810.142022 568.971636 799.71584 558.545455 786.869295 558.545455L228.32384 558.545455C215.477295 558.545455 205.051113 568.971636 205.051113 581.818182L181.778385 791.272727C181.778385 804.119273 192.204567 814.545455 205.051113 814.545455L810.142022 814.545455C822.988567 814.545455 833.414749 804.119273 833.414749 791.272727L810.142022 581.818182ZM693.778385 768C655.215476 768 623.960204 736.744727 623.960204 698.181818 623.960204 659.618909 655.215476 628.363636 693.778385 628.363636 732.341295 628.363636 763.596567 659.618909 763.596567 698.181818 763.596567 736.744727 732.341295 768 693.778385 768ZM321.414749 768C282.85184 768 251.596567 736.744727 251.596567 698.181818 251.596567 659.618909 282.85184 628.363636 321.414749 628.363636 359.977658 628.363636 391.232931 659.618909 391.232931 698.181818 391.232931 736.744727 359.977658 768 321.414749 768ZM163.323113 945.966545C171.282385 935.121455 188.341295 926.464 201.513658 926.464L243.218385 926.464 780.678749 926.464 822.383476 926.464C835.579113 926.464 852.614749 935.121455 860.597295 945.966545L903.582022 1004.497455C911.494749 1015.272727 907.305658 1024 894.016931 1024L822.383476 1024C809.18784 1024 792.152204 1015.342545 784.192931 1004.497455L762.688931 975.243636 261.208204 975.243636 239.727476 1004.497455C231.768204 1015.342545 214.709295 1024 201.536931 1024L129.880204 1024C116.591476 1024 112.425658 1015.272727 120.338385 1004.497455L163.323113 945.966545Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xingxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.979534 21.25407l158.210301 320.569086 353.768209 51.404763-255.989255 249.5281 60.430324 352.339674-316.419579-166.352749-316.420603 166.352749 60.431348-352.339674L0.001023 393.227919l353.768209-51.404763z" fill="#fe5001" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xingxing1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.536 108.544l134.144 271.36 0.512 0.512h0.512l305.664 43.008-220.16 215.552-0.512 0.512v0.512l52.736 304.128-272.896-142.848v-692.736m-1.024-5.632v699.904l275.968 144.384-53.248-306.688 222.208-217.6-308.224-43.52-136.704-276.48z" fill="" ></path>' +
    '' +
    '<path d="M67.584 422.912l308.224-43.52 137.216-276.48v699.904l-275.968 144.384 53.248-306.688-222.72-217.6z" fill="#F85959" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)