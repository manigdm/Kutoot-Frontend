import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import auth from "../../../../../utils/auth";

const CouponsTable = ({ data }) => {
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Details</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claimed</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.camp_title || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.coupon_code || '0'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.is_claimed == "true" ? "Yes" : "No" || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(item.coupon_expires)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 1 ? 'bg-blue-100 text-blue-800' :
                        item.status === 2 ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 3 ? 'bg-gray-100 text-gray-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                        {item.status === 1 ? 'Running' :
                        item.status === 2 ? 'Upcoming' :
                        item.status === 3 ? 'Completed' :
                        'All'}
                    </span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function CouponsTab() {
  const [loading, setLoading] = useState(false);
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    if (auth()) {
      setLoading(true);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}api/user/mycoupons?token=${
            auth().access_token
          }`
        )
        .then((res) => {
          if (res.data) {
            setCoinsData(res.data.data || []);
          } else {
            toast.error(res.data?.message || "Failed to fetch coins data");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error fetching coins data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-[180px] h-[50px] mt-4 mb-5">
        <h1 className="text-2xl font-bold text-gray-900">My Coupons</h1>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : coinsData.length > 0 ? (
        <CouponsTable data={coinsData} />
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">No coins data available</p>
        </div>
      )}
    </div>
  );
}