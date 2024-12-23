import { Avatar, IconButton, Button } from "@mui/material";
import React from "react";
import { IoCaretDown, IoCloseSharp, IoPeople } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";

function NewPoster() {
  return (
    <div className="container-fluid p-0">
      <div className="container" style={{ textAlign: "center" }}>
        {/* Header Section */}
        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <IoCloseSharp size={30} />
          </div>
          <div className="col">
            <h3 className="mb-0 text-center text-md-left">Create Poster</h3>
          </div>
          <div className="col-auto">
            <Button variant="outlined" className="d-block">
              Post
            </Button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
          </div>
          <div className="col">
            <h3 style={{ fontWeight: "bold" }}>Babu M</h3>
          </div>

          {/* Button Section for Friends, Album, Camera, and AI */}
          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-between">
            {["Friends", "Album", "Off", "AI label off"].map((label, index) => (
              <button
                key={index}
                className="btn btn-light d-flex align-items-center"
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  margin: "5px",
                  flex: "1 1 45%",
                  display: "flex",
                }}
              >
                {index === 0 && <IoPeople style={{ color: "blue" }} />}
                {index === 1 && <FaPlus style={{ color: "blue" }} />}
                {index === 2 && <CiCamera style={{ color: "blue" }} />}
                {index === 3 && <FaPlus style={{ color: "blue" }} />}
                <span style={{ color: "blue", marginLeft: "5px" }}>
                  {label}
                </span>
                <IoMdArrowDropdown
                  style={{ color: "blue", marginLeft: "5px" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="What's on your mind?"
              style={{ padding: "10px", borderRadius: "4px" }}
            />
          </div>
        </div>
        <div>
          <IoCaretDown
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>

        <div className="row col-12" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Photo/video</p>
        </div>
        <div className="row" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Assignee</p>
        </div>
        <div className="row" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Reporting to</p>
        </div>
        <div className="row" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Attachments</p>
        </div>
        <div className="row" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Taged user</p>
        </div>
        <div className="row" style={{ borderTop: "1px solid grey" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Priority</p>
        </div>
      </div>
    </div>
  );
}

export default NewPoster;
