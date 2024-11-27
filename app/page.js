import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import "./globals.css";

export default function Home() {


  const cardData = [
    {
      imgSrc: 'https://s3-alpha-sig.figma.com/img/6060/b634/700f26e61fff64622ba95139c310641a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwUbzGjmt-patm2DRBX7hTjjYUa5BXdRYg6DJejfdc5WKNd6hP1Kqea25JbY26ty-feVVjehtNJXjPF2mjyfNfICzM3jQMsTpZH-920-FvivFhtm0bVLV2-py~bQTumSqrw71X~m~AfEYZGz8b2gDdm4VXNnf5zgX-ZoKp-bz8osZxu~iLT~dp7evEpk~rxZEmRp1SVoTSn7c6FRxaLIFpORXZNXGGcZOdtUIK~qTMLTcBZrYSuhG~2o1iN-bdi5R608Jq07ZncbGC1Vb1-2fjNBFtEwThPnkE~VfMJfoArTT7S9xV1QGFKPOZF3-IJ5LUiI5~Oj1PssFwWlSCwi~Q__', // Replace with actual image URL
      title: 'HOME-MADE SCRUBS - ORGANIC',
      description: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.',
    },
    {
      imgSrc: 'https://s3-alpha-sig.figma.com/img/3bea/26a5/393d259ff06de501cc0f0534403826f1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2wiczSMxEenZSw6Lb5W7-4vI2mPM~9A9Jze1OQLvxGW8Y~jhS2agCd47lZzS9azHBZao5St8rPuDRgP8KNbEes2qQyjxc-pdqD9OiQA4ExPgYZ8LFzcs-eSV1-ygLEVIqKVaXgBLAtDPBr4wUeSKAxsc5HwhBgHrmyfrSH4Mc~hQsSD-RFpVk7a1~fywNN-NlQ7lZB04g-fKnBoGpBDlxmAwbfEmqaoZBPpIWJCsF242QllGJRwI9Rwxjw6F19s53ZVEsUB3R9j~u4YMquwhXHW3VoFVi4lKCUp1Fi~cOS8yWmgOnaYL0FJSFmo-dCBlX6P4UrlyTMl8M5kZbgM5Q__', // Replace with actual image URL
      title: 'HOME-MADE SCRUBS - ORGANIC',
      description: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.',
    },
    {
      imgSrc: 'https://s3-alpha-sig.figma.com/img/ad56/1efd/06c2eebd86658598b9e353cbfac8fe01?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4p7KrnR-Fl~cvDXktc5p8zp6cS4vTO5nMiJeqOdIXUZbgE7zA-cfF35jeIZwSGrhD8WN6gx~mEkkDk4Y51b7LuOkAo~Z3CZRU0IyadFEFr627ydwxzaYnrAFNOTNz~w-cS~beDUA5RZDHgc2rywF5MDEAmeHfpXwK-50CxF7vJdzWt8Nm0re5kau5Ia7PrD8r8UfOHI9rPDnAKxBpBtkLuO4be2qKVD4SkRZMXHmac8hhnoulYf7LOmAwee8aLKaO-N9EDQp7F8HH3Q-deaAEhJGv2orPrh-ac7WuugPRvmJ4M-m24Eg8RMpsGkX~z7iDcDfhDo7SmIJtWG9p8ZQQ__', // Replace with actual image URL
      title: 'HOME-MADE SCRUBS - ORGANIC',
      description: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.',
    },
  ];



  return  <div>
  <div
      className="position-relative text-center d-flex align-items-center justify-content-center  "
      style={{
        width: "100%",
        height: "60vh",
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/aba1/b144/3a89e727f82306b6e5f2f7ea316a4100?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OTfJXcAyLHFyMyJ~UC1sVGgUPQMztxfDzkZP5ynetB8HUCX0rKdOauShhvOJr7uOS32sPkyilmL6wW04G14IlJY74WywqwPoWBqJdElSVmnzWSZQJiADl-6cm57BR4OUt-sE3lvE2HmBx9vLag2oygM5UpKDPWIDk6OQ-BNxu3oR26Xx6QyYmmeJ9-4Mc5OGGMdHrnUYQXomhMnl6l9YiUvKK7LvHSFw221wULjXsqUhJLRYqhXYp7StPlc3aSPEYzs~Z2vsOEpMQQPyuwph7hGne9PtKr1UzNkp8P4tSGrqVfZAhWPpH2M7I3aDVuUXMXFr7N1PzecLVFFcIdEIZA__')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div
        className="bg-white text-dark  p-4 shadow"
        style={{ maxWidth: "594px", textAlign: "center" }}
      >
        <h6 style={{fontFamily:"fangsong"}} className="text-uppercase">C o s m e t i c s</h6>
        <h1 style={{fontFamily:"monospace",fontWeight:"500"}} >Best Make-Up Products 2023</h1>
        <a style={{borderRadius:"0px"}} href="#" className="btn btn-dark px-4 ">
                  READ MORE
                </a>
      </div>
    </div>
<div className="d-flex justify-content-center mt-5 " >
<h1 style={{ fontFamily: "monospace" }} className="fw-bold">
  POPULAR POSTS
</h1>



</div>

<div>

<div className="container py-5">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={index}>
            <div
              className="card text-center p-2 "
              style={{
                border: '2px dashed #e2d3f4', // Dashed border style
                borderRadius: '10px',
              }}
            >
              <img
                src={card.imgSrc}
                className="card-img-top"
                alt={card.title}
                style={{ borderRadius: '10px 10px 0 0',height:"320px" }} // Keep the image aligned with the card's rounded corners
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a style={{borderRadius:"0px"}} href="#" className="btn btn-dark px-4 ">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


</div>

<div className="d-flex justify-content-center flex-wrap gap-2">
  {/* Image 1 */}
  <div>
    <img
      src="https://s3-alpha-sig.figma.com/img/215f/3f4d/ac8eb4fed3719791466fabe43ed4f2bb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7-6H8uGbVsUmmWtxbM~HQKoadogdDs7ezbrTEBQrzoFj0fn9f7yjWCNtB0CTcmpswwHZsjhYfmtqy7Q8GLVObxYufn3CKKbpitZzihEV55IxkpCVX6BOJoby6cnjfWjCPce-a8EHB7~LrVEL7cNdUXab0uxD8f7lfPLrlh3lr2TAzte4JnN-JfEsmhxhGEx0cfSMdLCxr7lGBshXnhlYYklM61PAHEQJG5jdfvXnJiMaPJ1zlAajcpCztOmx6i~Q-k0OQpDlwNn6n~WIkReshy3HYg45Wgzg7BsBjb2mgln~uZ1KeuhnNxiJwyCGpWfvldZ9jw-oz7DNO-PAeLJQg__"
      alt="Lip product"
      className="img-fluid"
      style={{
        width: "525px",
        maxWidth: "435px",
        height: "450px",
      }}
    />
  </div>
  {/* Image 2 */}
  <div>
    <img
      src="https://s3-alpha-sig.figma.com/img/85fd/3254/ce644687cc634e1e9393ed386d5be2f3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J9stlUzyavtUKuK7wfllqC60NgvfbYcnsll-1mHbd8xZYhd5dOYEsoIDXlj8ROg9bltYA4JSuV4E328T~OAHvt7YskDryMjBkx1kGdNvczCOde5FVVgH5qyXoNNaXts0NdD3HHq25TGSge3Ai~8S4d9ZC53qu45AVkxSRcoXmmUTN5sgeYAjrVod9iI7GFLjhYRu6vkppcARlcScE~nW-0fD-7a4~jVazqjLwYE-GPezwMtCr-yOYK9YBz15GijnCimDpRKCAHXOwgbZApAEnvqeh0MhNZyeCpca0qudp-VL8q~vnmiMZ6ixUSCUHgA3K-XEsRCXijQOVWQnPzC9gA__"
      alt="Skincare product"
      className="img-fluid"
      style={{
        width: "525px",
        maxWidth: "435px",
        height: "450px",
      }}
    />
  </div>
  {/* Image 3 */}
  <div>
    <img
      src="https://s3-alpha-sig.figma.com/img/be18/d39c/f9a07648bdd3335e620f42a26c3efbe6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=escUb8MnIoaxRCYuYhxZ2pzyTo-h4cYvOUbdCV1dTKnsUYk3s1ByDHt1CKJ4Kco2cZjvH67DF6e~raI5QRU9ruc6Uq5tbth5eGRO2KNJjyuvv5m3R0QIUmIQixgxpdn~5CvJMuR1PpNfekcP2DyXHEzM7nhrfoUycnqXGaZ4JQH1g~RteXYo7Nj4~iqYWpkHHdS2Kc6lXbXvt0atGhkFP4MMbzf7wZe5twV5PKSjxgN9WKytjU~QHVuyNR578sUUFxVy0iK-QVCjy8v8Sw5gz7g0G~rpM0aaFmECATB7kWY-RITxFf~EKdwwOIv96U2j0NQKfYsABEhgnOH42Z14Tg__"
      alt="Perfume bottle"
      className="img-fluid"
      style={{
        width: "525px",
        maxWidth: "435px",
        height: "450px",
      }}
    />
  </div>
</div>

<div className="d-flex justify-content-center mt-5 " >
<h1 style={{ fontFamily: "monospace" }} className="fw-bold">
 LATEST
</h1>



</div>

<div className="container my-5">
      {/* Main Row */}
      <div className="row g-5">
    {/* Left Column - Main Cards */}
    <div className="col-lg-8 col-11 mx-auto">
  <div className="row g-4">
    {/* First Card */}
    <div className="col-sm-6 col-12">
      <div
        className="card text-center p-3"
        style={{
          border: "2px dashed #e2d3f4",
          borderRadius: "10px",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/6060/b634/700f26e61fff64622ba95139c310641a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwUbzGjmt-patm2DRBX7hTjjYUa5BXdRYg6DJejfdc5WKNd6hP1Kqea25JbY26ty-feVVjehtNJXjPF2mjyfNfICzM3jQMsTpZH-920-FvivFhtm0bVLV2-py~bQTumSqrw71X~m~AfEYZGz8b2gDdm4VXNnf5zgX-ZoKp-bz8osZxu~iLT~dp7evEpk~rxZEmRp1SVoTSn7c6FRxaLIFpORXZNXGGcZOdtUIK~qTMLTcBZrYSuhG~2o1iN-bdi5R608Jq07ZncbGC1Vb1-2fjNBFtEwThPnkE~VfMJfoArTT7S9xV1QGFKPOZF3-IJ5LUiI5~Oj1PssFwWlSCwi~Q__"
          alt="Home-made scrubs"
          className="card-img-top rounded-top img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fs-5">HOME-MADE SCRUBS - ORGANIC</h5>
          <p className="card-text fs-6">
            Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.
          </p>
          <button style={{borderRadius:"0px"}} className="btn btn-dark">READ MORE</button>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="col-sm-6 col-12">
      <div
        className="card text-center p-3"
        style={{
          border: "2px dashed #e2d3f4",
          borderRadius: "10px",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/6eae/8eed/6adfc948dd85fb6d7ddda4eb882d4483?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVTRtzjBaZn8PoUVAXkMKNNfYGwRjZVDJjodslNfGhC7jxpb3UTI8t6TAvv6RbYr80WTB2Zf4KFzfhbdeRocCrF6l2K9jxXRHxvtoD3KZ6RHuvL~nohGwBkxdwS7eYG-9WQz7FMETpl4PmCy4j-rBIpNBf34EuGVH5fFVxJ9JD1pYJ8IINGUaqnbOht3nkR9onZ7T-n0pKk6CNTb38KsTjmwbEwHHDcpB6um2lS28YIdpt5yS0XhjLYW1a0MqTV~5CRJROLRmlNW-jwqdq8ToSUqk8~i3tl5uYLa5WMSLSoMyw6bXNlC1~gWcDt7Irk-yErmQqDQXyJRqCPZAv9q3A__"
          alt="Home-made scrubs"
          className="card-img-top rounded-top img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fs-5">HOME-MADE SCRUBS - ORGANIC</h5>
          <p className="card-text fs-6">
            Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.
          </p>
          <button style={{borderRadius:"0px"}} className="btn btn-dark">READ MORE</button>
        </div>
      </div>
    </div>
  </div>

  {/* Row with larger card (perfume) */}
  <div className="row g-4 mt-4">
    <div className="col-12">
      <div
        className="card d-md-flex align-items-center p-3"
        style={{
          border: "2px dashed #e2d3f4",
          borderRadius: "10px",
        }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/79e2/019e/c613f11302141ebafb3dee66af21c9a3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsge4DLi1UyJYF-PvULKdYPY9R4n1tnM-5eQZmBmucF0IAZT7g1P7VQ5ZR1jsDWzjxe81U6M12R6xPcwVfi6TDWqBDacDp-d9uiu3A37UKhd1DpHPr56GbFhrZMOpjYWAqRAD8yUAOJT1Opaw~bRQQsAmbwEwG9IcQpoEh1lWycYC9xeiTIZHUF-Oza4gzrC7UXBlLUmJovuhJpoBa~jVDFUQC1pe~vlp9Ic7s~TalYyjN0ubEFQPw6T40hwaTK7blZ1d5lsfSRQmBXpJEcvN4ctbYX66I7I0vid8Txtz0~B~X3pmN~wvUAkeQ6DcicKF003uTpT4oPGGvQRl4Fo-w__"
              alt="Perfume"
              className="img-fluid your-element-class rounded"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h4 className="fw-bold fs-5">DOES PERFUME REALLY DESTROY YOUR SKIN?</h4>
            <p className="fs-6">
              Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at.
            </p>
            <button style={{borderRadius:"0px"}} className="btn btn-dark  ">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




        {/* Right Column - Additional Cards */}
        <div className="col-md-4">
  <div className="row g-4 justify-content-center">
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div
        style={{
          position: "relative",
          width: "300px", // Adjust the width as per your requirement
          height: "220px", // Adjust the height as per your requirement
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/aec0/8bc2/473c2d15dd1fa99620a6bd69797644d3?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8JtGZVIbeWF0WOTfDAiBvXAKeDxLqgr7TFXgVn7VCBlhKCYNJI9LlpEUjbiwhcwOU9jBYlAPBKu1Aw-w0KJaxgSjEK32ewRgKEJyeMj1HkrGynR3CDsnotUOHg8EN07-qCIsc12sZ9Uq1vUbvZGD83yqxM~vVPjD27dMJgNeKClKYTU7iVQ8RZGb828cSH3tUf-7PZm~IzOwSaCTi7R8-FwUVxUj3OQ04iWpCi6wmeJJL~bSqOyddX2pG5~inUvPBDI4FUaE3TMJ0gb01Av4W1ekL2uOA~yl5j5NkClHMqssvJEuzGwFzuyTuj~Esp0RFEwjHpJaxQYHKu52sgcWg__"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: "13%",
            left: "9%",
            width: "80%",
            height: "75%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h5 style={{ fontSize: "12px", fontWeight: "300", margin: "0" }}>
            CONNECTION
          </h5>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "5px 0 10px",
            }}
          >
            LOREM IPSUM
          </h2>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>

    {/* Repeat for other items */}
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "230px",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/6888/39ca/60e7b185549e7b15d9e7d62d36d0f2ed?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FN~~LCABWdad0RXtD~nJEoL3TYk4~VHYDtNy6abYFN~eyO12ASqc436XaEwLFhZyBR2bDIW5Y8WMYkPaCIpR--VFVEKNM9jhw~Leiuz12-RHUwm1BfboWChYflHiVDkyEq~JxLE473zSCtgVkZfGOcqSg6ewMUNt5qfUyi~RqXqof-w72EGkks~zF0cJmFwkjv5RAU2gnPhWYf-S4xSSS4LiV-19S9soaUInL9Elzta8yxi0d0N2~TyFhFk8LTgvt5vlm9y-5n-P-Q2Nib0HhUhZgyt2sG4aFZ8kKtKEYAQEKruYQ7~E5RMKQSpvQqzOCyjZzgYMGX5hnm1tFyAjeg__"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: "13%",
            left: "9%",
            width: "80%",
            height: "75%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h5 style={{ fontSize: "12px", fontWeight: "300", margin: "0" }}>
            CONNECTION
          </h5>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "5px 0 10px",
            }}
          >
            LOREM IPSUM
          </h2>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>

    {/* Repeat for other items */}
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "230px",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/d74a/8406/e0734458f67c32341569973b6ecee855?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5-pXd-MUQ2cg0RNYWkefam4BMXpCRbZkwAiuHmLkmiQPwpLTEgd5bfTAprILPomFJuVluEN45yNUyYY1-5M6IIbqbC5FIoBTdM6Co7wsedb5~jT3Kw7p4fVqF~1CLEbKn3JJcx2aWzRduwsgYxdqntxrKItHexS1dt7Gg5iLSU9~akgmx-Ch3uwLyTINXUApLv4OgLW-0RvP~g5I3uSZrbJLUdiFKFV2PsInzTVX2WRswMcPNoEtPVJ~7x5wSCEukSnyxSQM6dAxBDX24oS4ygeihzC6TfJvha4vrpHlTX5dv~dVaLwSDrxSTutmjTHrnlISWBYDRfu5p9IY1Be3Q__"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: "13%",
            left: "9%",
            width: "80%",
            height: "75%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h5 style={{ fontSize: "12px", fontWeight: "300", margin: "0" }}>
            CONNECTION
          </h5>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "5px 0 10px",
            }}
          >
            LOREM IPSUM
          </h2>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* View All Button */}
      <div className="text-center mt-4">
        <button style={{borderRadius:"0px"}} className="btn btn-outline-dark mt-5 mb-2 px-5 ">VIEW ALL</button>
      </div>
    </div>

    <div className="mt-5" >
    <img 
  id="myImage" 
  src="/Capture2.PNG" 
  alt="Responsive Image" 
  style={{
    width: "100%",
    height: "auto",
    maxHeight:"220px",  // Ensure height is auto on small screens
    maxWidth: "100%",  
  }} 
/>


    </div>



    <div className="mt-5 mb-5">
  <div
    className="d-flex justify-content-center align-items-center py-4 container"
    style={{ borderTop: "8px solid rgb(243 226 246)", borderBlock: "8px solid rgb(243 226 246)" }}
  >
    <div className="d-flex justify-content-center flex-column flex-sm-row align-items-center w-100">
      <span
        className="me-3 mb-3 mb-sm-0"
        style={{ fontSize: '1.2rem', fontFamily: "cursive" }}
      >
        SUBSCRIBE NOW!
      </span>
      <input
        type="email"
        className="form-control me-2 mb-3 mb-sm-0"
        placeholder="Enter your email"
        style={{
          width: '100%',
          maxWidth: '300px',
          border: '1px solid #ddd',
          borderRadius: '0.25rem',
        }}
      />
      <button
        className="btn mb-3 mb-sm-0"
        style={{
          backgroundColor: '#f0d7ff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.25rem',
        }}
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
</div>



  </div> 





    

}
