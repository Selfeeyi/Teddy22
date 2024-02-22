import React, { useState } from "react";
import "./quatation.css";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import { IoEye } from "react-icons/io5";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

const QuotationTable = () => {
  const navigate = useNavigate();

  const [createModal, setCreateModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [viewData, setViewData] = useState(null);

  const tableObj = [
    {
      srno: "1",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Accepted",
    },
    {
      srno: "2",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Rejected",
    },

    {
      srno: "3",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Accepted",
    },
    {
      srno: "4",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Rejected",
    },
    {
      srno: "5",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Accepted",
    },

    {
      srno: "6",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Rejected",
    },
    {
      srno: "6",
      Serviceprovidername: "Selfeey",
      quatationDate: "12/01/2024",
      aprove: "Accepted",
    },
  ];

  const Ticketcolumns = [
    {
      title: "Service Provider Name",
      dataIndex: "Serviceprovidername",
      key: "Serviceprovidername",
      responsive: ["xs", "md"],
      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.Serviceprovidername}
        </div>
      ),
    },

    {
      title: "Quatation Date",
      dataIndex: "quatationDate",
      key: "quatationDate",

      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.quatationDate}
        </div>
      ),

      responsive: ["xs", "md"],
    },

    {
      title: "View Quatation",
      dataIndex: "view",
      key: "view",
      render: (_, record) => (
        <div onClick={() => navigate("/quotation/1")}>
          <IoEye size={20} color="black" />
        </div>
      ),
      responsive: ["xs", "md"],
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            fontWeight: "600",
            color: record.aprove === "Accepted" ? "green" : "red",
          }}
        >
          {record.aprove}
        </div>
      ),
      responsive: ["xs", "md"],
    },
  ];

  return (
    <div>
      <NavigationBar2 />

      <div style={{ backgroundColor: "#37718e", paddingLeft: 30, height: 650 }}>
        <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
          <p
            style={{
              color: "white",
              margin: 0,
              fontFamily: "DexaSemi",
              fontSize: 25,
            }}
          >
            Quation Overview
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            height: 500,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "100%" }}>
            <Table
              columns={Ticketcolumns}
              data={tableObj}
              scroll={{
                x: 700,
              }}
              pagination={{
                current: page,
                pageSize: pageSize,
                //showTotal: showTotal,
                hideOnSinglePage: true,
                pageSizeOptions: [5, 10, 15, 20],
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={createModal} onClose={() => setCreateModal(false)}>
        <div
          style={{
            backgroundColor: "white",
            width: 500,
            paddingInline: 30,
            borderRadius: 10,
            paddingBlock: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontFamily: "dexaSemi",
                textAlign: "center",

                flex: 1,
              }}
            >
              ITEM
            </div>
            <div
              style={{
                fontFamily: "dexaSemi",
                textAlign: "center",

                flex: 1,
              }}
            >
              QUANTITY
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ flex: 1 }}>
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <div
                  style={{
                    border: "1px groove #efefef",
                    textAlign: "center",
                    paddingBlock: 8,
                  }}
                >
                  Flowers
                </div>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <div
                  style={{
                    border: "1px groove #efefef",
                    textAlign: "center",
                    paddingBlock: 8,
                  }}
                >
                  3
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QuotationTable;
