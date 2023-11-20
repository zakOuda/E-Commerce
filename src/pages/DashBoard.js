import React, { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Column } from "@ant-design/plots";

const DashBoard = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sep",
      sales: 100,
    },
    {
      type: "Oct",
      sales: 30,
    },
    {
      type: "Nov",
      sales: 200,
    },
    {
      type: "Dec",
      sales: 50,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  const nav = useNavigate();
  const [rise, setRise] = useState(true);
  return (
    <div>
      <div className='dashboard-time-export mb-4 d-flex justify-content-between align-items-center'>
        <h1 className='mb-0  pe-3 py-3'>DashBoard</h1>
        <div className='d-flex rounded-3 gap-3'>
          <select
            className='form-select fs-5 fw-bold'
            aria-label='Default select example'
          >
            {/* <option>Open this select menu</option> */}
            <option value='1'>1 October 2022</option>
            <option value='2'>2 October 2022</option>
            <option value='3'>3 October 2022</option>
          </select>
          <div className='d-grid gap-2'>
            <button
              type='button'
              name=''
              id=''
              className='btn fs-3 text-center fw-bold'
              style={{ background: "#ffd333" }}
            >
              Export
            </button>
          </div>
        </div>
      </div>

      <div className='dashboard-header d-flex justify-content-between align-items-center gap-3 mb-4'>
        <div className='d-flex flex-column w-100 bg-white p-4 rounded-3'>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <h4>Total sells</h4>
            <HiDotsVertical
              className='dots'
              // onClick={() => {
              //   nav("/");
              // }}
            />
          </div>
          <div className='mt-4 d-flex w-100 justify-content-between align-items-center'>
            <h1>$100.00</h1>
            <div className='d-flex gap-1 flex-column'>
              <div className=' d-flex align-items-center justify-content-end gap-1'>
                {rise ? (
                  <>
                    <AiOutlineRise className='links-compare-percent-rise fs-3' />
                    <p className='links-compare-percent-rise mb-0 fs-5 fw-bold'>
                      %24.5
                    </p>
                  </>
                ) : (
                  <>
                    <AiOutlineFall className='links-compare-percent-fall fs-3' />
                    <p className='links-compare-percent-fall mb-0 fs-5 fw-bold'>
                      %12.5
                    </p>
                  </>
                )}
              </div>
              <div>
                <p className='links-compare-year'>compared to Apr 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 bg-white p-4 rounded-3'>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <h4>Average Order Value</h4>
            <HiDotsVertical className='dots' />
          </div>
          <div className='mt-4 d-flex w-100 justify-content-between align-items-center'>
            <h1>$100.00</h1>
            <div className='d-flex gap-1 flex-column'>
              <div className=' d-flex align-items-center justify-content-end gap-1'>
                {rise ? (
                  <>
                    <AiOutlineRise className='links-compare-percent-rise fs-3' />
                    <p className='links-compare-percent-rise mb-0 fs-5 fw-bold'>
                      %24.5
                    </p>
                  </>
                ) : (
                  <>
                    <AiOutlineFall className='links-compare-percent-fall fs-3' />
                    <p className='links-compare-percent-fall mb-0 fs-5 fw-bold'>
                      %12.5
                    </p>
                  </>
                )}
              </div>
              <div>
                <p className='links-compare-year'>compared to Apr 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column w-100 bg-white p-4 rounded-3'>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <h4>Total Orders</h4>
            <HiDotsVertical className='dots' />
          </div>
          <div className='mt-4 d-flex w-100 justify-content-between align-items-center'>
            <h1>$100.00</h1>
            <div className='d-flex gap-1 flex-column'>
              <div className=' d-flex align-items-center justify-content-end gap-1'>
                {rise ? (
                  <>
                    <AiOutlineRise className='links-compare-percent-rise fs-3' />
                    <p className='links-compare-percent-rise mb-0 fs-5 fw-bold'>
                      %24.5
                    </p>
                  </>
                ) : (
                  <>
                    <AiOutlineFall className='links-compare-percent-fall fs-3' />
                    <p className='links-compare-percent-fall mb-0 fs-5 fw-bold'>
                      %12.5
                    </p>
                  </>
                )}
              </div>
              <div>
                <p className='links-compare-year'>compared to Apr 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='mb-4'>
          <h1 className='mb-0 pe-3 py-3'>Incoming</h1>
        </div>
        <div className='d-flex gap-4'>
          <div className='table-high income rounded-3 col-4'>
            <table className='table fs-6' ref={ref}>
              <thead>
                <tr>
                  <th scope='col'>URLs</th>
                  <th scope='col'>Users</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='income rounded-3 col-8'>
            {height}
            <Column
              {...config}
              style={{ height: `${height}px`, minHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
