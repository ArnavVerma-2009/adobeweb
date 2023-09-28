import React from "react";
import Transition from "../transition";

export default function SchedulePage() {
  return (
    <Transition>
    <div className="overflow-x-hidden p-4 sm:p-28 mt-20 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="text-center drop-shadow-[0_0px_35px_#007bc4] text-[#007bc4] mb-14 text-4xl heading"
      >
        THE FULL SCHEDULE
      </h1>

      <div className="overflow-x-auto customScrollbar">
        <table className="border-2 border-collapse w-full text-white">
          <tbody>
            <th>VENUE </th>
            <th>9:00 </th>
            <th>9:30 </th>
            <th>10:00</th>
            <th>10:30</th>
            <th>11:00</th>
            <th>11:30</th>
            <th>12:00</th>
            <th>12:30</th>

            <tr>
              <td>Conference Room </td>
              <td colSpan={4}>Brain wars </td>
              <td colSpan={4}>Illuminati </td>
            </tr>
            <tr>
              <td>Library </td>
              <td colSpan={4}>Random Ass event</td>

              <td colSpan={4}> </td>
            </tr>
            <tr>
              <td>ATL lab </td>
              <td colSpan={4}>Upvento </td>
              <td colSpan={4}> </td>
            </tr>
            <tr>
              <td>Stage </td>
              <td colSpan={8}>Raise-A-Rap </td>
            </tr>
            <tr>
              <td>Multimedia lab </td>
              <td colSpan={4}>Game-A-Thon </td>
              <td colSpan={4}> </td>
            </tr>
            <tr>
              <td>Middle comp lab </td>
              <td colSpan={4}>Equinox </td>
              <td colSpan={4}> </td>
            </tr>
            <tr>
              <td>Senior Comp lab </td>
              <td colSpan={4}>Ragnarok (Round 2) </td>
              <td colSpan={4}>Ragnarok (Round 3)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div></Transition>
  );
}
