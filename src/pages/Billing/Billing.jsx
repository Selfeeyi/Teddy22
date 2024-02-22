import React, { useState } from "react";
import "./billing.css";
import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import { IoEye } from "react-icons/io5";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

const Billing = () => {

  const navigate = useNavigate()

  const [createModal, setCreateModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [viewData, setViewData] = useState(null);

  const tableObj = [
    {
      srno: "1",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },
    {
      srno: "2",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },

    {
      srno: "3",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },
    {
      srno: "4",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },
    {
      srno: "5",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },

    {
      srno: "6",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
    },
    {
      srno: "6",
      Serviceprovidername: "Selfeey",
      OrderDate: "12/01/2024",
      BookingDate: "15/12/2023",
      ServiceAvailed: "0.00",
      amountPaid: "0.00",
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
      title: "Order Date",
      dataIndex: "OrderDate",
      key: "OrderDate",

      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.OrderDate}
        </div>
      ),

      responsive: ["xs", "md"],
    },
    {
      title: "Booking Date",
      dataIndex: "BookingDate",
      key: "BookingDate",

      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.BookingDate}
        </div>
      ),

      responsive: ["xs", "md"],
    },
    {
      title: "Service Availed",
      dataIndex: "ServiceAvailed",
      key: "ServiceAvailed",

      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.ServiceAvailed}
        </div>
      ),

      responsive: ["xs", "md"],
    },
    {
      title: "Amount Paid",
      dataIndex: "amountPaid",
      key: "amountPaid",

      render: (_, record) => (
        <div style={{ fontWeight: "600", color: "black" }}>
          {record.amountPaid}
        </div>
      ),

      responsive: ["xs", "md"],
    },

    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (_, record) => (
        <div onClick={() => setCreateModal(true)}>
          <IoEye size={20} color="black" />
        </div>
      ),
      responsive: ["xs", "md"],
    },

    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
      render: (_, record) => (
        <div className="">
          <button
          onClick={()=>navigate('/invoices/1')}
            style={{
              backgroundColor: "#fc2260",
              color: "white",
              outline: "none",
              border: "none",
              borderRadius: 6,
              paddingBlock: 5,
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Download
          </button>
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
            Billing Overview
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

export default Billing;

{
  /* <table style={{ width: "100%",    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", }}>
          <thead
            style={{
              color: "black",
              border: "1px solid grey",
              backgroundColor: "#efefef",
            }}
          >
            <tr>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Service Provider Name
              </th>

              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Order Date
              </th>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Booking Date
              </th>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Service Availed
              </th>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                View Order
              </th>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Amount Paid
              </th>
              <th
                style={{
                  paddingBlock: 6,
                  fontFamily: "dexaSemi",
                  borderBottom: "1px groove #efefef",
                }}
              >
                Invoice
              </th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", border: "1px solid black" }}>
            {[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12].map((item, i) => (
              <tr key={i}>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  Samay Kumar
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  2023-12-12
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  15-12-2023
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  0.00
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  <div onClick={() => setCreateModal(true)}>
                    <IoEye />
                  </div>
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  0.00
                </td>
                <td
                  style={{
                    paddingBlock: 6,
                    borderBottom: "1px groove #efefef",
                  }}
                >
                  <button
                    onClick={() => navigate("/landing")}
                    style={{
                      backgroundColor: "#fc2260",
                      color: "white",
                      outline: "none",
                      border: "none",

                      borderRadius: 8,
                      paddingBlock: 5,
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */
}
