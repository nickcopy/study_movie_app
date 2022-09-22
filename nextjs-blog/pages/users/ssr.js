import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function userspage(props) {
  return (
    <Layout>
      <div>사용자 목록 페이지</div>
      {props.users.map((user) => (
        <div key={user.id} className="border m-5 p-3">
          <div className="texet-2xl font-bold"> {user.username}</div>
          <div>{user.name}</div>
          <div className="text-gray-600">{user.email}</div>
          <a href={`https://${user.website}`}>{user.website}</a>
        </div>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data);
  return {
    props: {
      users: res.data,
      sunmoon: "선문대",
    },
  };
}
