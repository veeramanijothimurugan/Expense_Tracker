import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faCreditCard, faEllipsisVertical, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";

const TransTable = () => {
  return (
    <div className="transactions">
      <table>
        <tr>
          <th className="thead">Category</th>
          <th className="thead">Date</th>
          <th className="thead">Amount</th>
          <th className="thead">Payment Method</th>
          <th className="thead">Action</th>
        </tr>
        <tr>
          <td className="tdata">Food</td>
          <td className="tdata">1/10/24</td>
          <td className="expense tdata">60</td>
          <td className="tdata">
            <FontAwesomeIcon icon={faBank} /> Account
          </td>
          <td className="tdata">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </td>
        </tr>
        <tr>
          <td className="tdata">Salary</td>
          <td className="tdata">1/10/24</td>
          <td className="income tdata">35000</td>
          <td className="tdata">
            <FontAwesomeIcon icon={faMoneyBill1} /> Cash
          </td>
          <td className="tdata">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </td>
        </tr>
        <tr>
          <td className="tdata">Petrol</td>
          <td className="tdata">1/10/24</td>
          <td className="expense tdata">100</td>
          <td className="tdata">
            <FontAwesomeIcon icon={faBank} /> Account
          </td>
          <td className="tdata">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </td>
        </tr>
        <tr>
          <td className="tdata">Dress</td>
          <td className="tdata">1/10/24</td>
          <td className="expense tdata">2000</td>
          <td className="tdata">
            <FontAwesomeIcon icon={faCreditCard} /> Card
          </td>
          <td className="tdata">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </td>
        </tr>
      </table>
      <div className="input">
        <button className="btn add"> ADD</button>
      </div>
    </div>
  );
};

export default TransTable;
