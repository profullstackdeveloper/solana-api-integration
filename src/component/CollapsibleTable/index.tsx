import { useEffect, useState } from "react";
import axios from "axios";
import { Transaction } from "../../utils/types";
import { Row } from "./Row";
import { fetchTx } from "../../utils/api";

export const CollapsibleTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const accountAddress = "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt";

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const key = process.env.REACT_APP_API_KEY;
    if (key) {
      const response = await fetchTx(accountAddress, key, 50, 1);
      setTransactions(response.data.data);
    } else {
      throw new Error("API key is required!");
    }

  };

  return (
    <div className="m-5">
      <div className="float-right">
        <p>
          Search trasactions which source address or destination address is
          equal to your input{" "}
        </p>
        <input
          placeholder="Address"
          className="border-2 m-3 mt-0 float-right p-2 w-1/2"
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      <table className="w-full text-lg text-left text-gray-500 border-2">
        <thead className="text-gray-700 uppercase bg-gray-300">
          <tr>
            <th className="w-[40%] py-3 px-6">Signature</th>
            <th className="w-[15%] py-3 px-6 text-center">Status</th>
            <th className="w-[25%] py-3 px-6">Block</th>
            <th className="w-[15%] py-3 px-6">Fee(SOL)</th>
            <th className="w-[5%] py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .filter((transaction) => {
              for (let detail of transaction.events) {
                if (
                  detail.source.includes(searchWord) ||
                  (detail.destination &&
                    detail.destination.includes(searchWord))
                ) {
                  return true;
                }
              }
              return false;
            })
            .map((transaction) => (
              <Row key={transaction.id} transaction={transaction} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
