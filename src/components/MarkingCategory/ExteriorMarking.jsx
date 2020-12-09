import React, { useEffect, useState } from "react";
import "./ImageCategory.css";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
var axios = require("axios");

const ExteriorMarking = () => {
  const [imageId, setImageId] = useState([]);
  const [allImage, setAllImage] = useState([]);
  const [apiData, setApiData] = useState({});
  const [pageReload, setPageReload] = useState(false);
  const [postImage, setPostImage] = useState([]);
  const [updationIP, setUpdationIP] = useState();
  const userId = useSelector(state => state.userId);

  // fetch image category data
  useEffect(() => {
    const getImageCategory = async () => {
      console.log("inside useEffect");
      var config = {
        method: "get",
        url: "http://localhost:8080/api/image-category",
      };
      await axios(config)
        .then(function(response) {
          setAllImage([]);
          // console.log(JSON.stringify(response.data));
          setApiData(response.data);
          response.data.data.map(item => {
            setAllImage(arr => [...arr, item.StockImageId]);
            setPageReload(false);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    setAllImage([]);
    getImageCategory();
  }, [pageReload]);

  // get current ip address
  fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(data => setUpdationIP(data.ip));

  // initialize status id and restStatusId
  const statusId = 1;
  const restStatusId = 5;

  // selected image function
  const selectImage = item => {
    const existsId = imageId.includes(item.StockImageId);
    if (existsId) {
      var filteredAry = imageId.filter(e => e !== item.StockImageId);
      setImageId(filteredAry);
    } else {
      setImageId(arr => [...arr, item.StockImageId]);
    }
  };
  // interior selection marking image function
  const ExteriorMarkingFunc = async () => {
    // filter selection or unselection image

    let _data = allImage?.map(item => {
      let _obj = {};

      if (imageId.includes(item)) {
        _obj = {
          isPrimary: 1,
          StockImageId: item,
        };
      } else {
        _obj = {
          isPrimary: 0,
          StockImageId: item,
        };
      }
      return _obj;
    });
    console.log("New Data", _data);
    setImageId([]);
    var axios = require("axios");
    var data = JSON.stringify({
      imageArray: _data,
      statusId: statusId,
      restStatusId: restStatusId,
      updationIP: updationIP,
      updatedBy: userId,
    });

    console.log(data);
    var config = {
      method: "post",
      url: "http://localhost:8080/api/update-image",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        setPageReload(true);
        setFinalData(allImage);
        setAllImage([]);
        _data = [];
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // unselect all images
  const unselectAllImage = () => {
    setImageId([]);
  };

  // select all images
  const selectAllImage = () => {
    apiData.data.map(item => {
      setImageId(arr => [...arr, item.StockImageId]);
    });
  };
  return (
    <div className="image__category">
      <Header />

      <div className="image__category_btn">
        <div>
          <Row className="justify-content-md-center">
            <Col xs="6" lg="3">
              <div className="container__left_section">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={unselectAllImage}
                >
                  UnSelect All
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={selectAllImage}
                >
                  Select All
                </Button>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="container__mid_section">
                <div className="mid__section_info">
                  <h5>
                    Marked Vehicle: <strong>462521</strong>
                  </h5>
                  <h5>
                    Remaining Vehicle: <strong>985362</strong>
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="3">
              <div className="container__right_section">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={ExteriorMarkingFunc}
                >
                  Mark Exterior
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Container>
        <div className="image__container">
          {!apiData.data ? (
            <div className="image__category_loader">
              <CircularProgress />
            </div>
          ) : (
            apiData?.data?.map((item, ind) => (
              <div
                className={
                  imageId.includes(item.StockImageId)
                    ? "selected__image image__item"
                    : "unselect__image image__item"
                }
              >
                <button
                  key={ind}
                  className="image__item_btn"
                  onClick={() => selectImage(item)}
                >
                  <img src={item.URL} alt="images category" />
                </button>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default ExteriorMarking;
