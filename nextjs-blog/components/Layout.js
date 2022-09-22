import Navbar from "./NavBar";

export default function Layout(props) {
  console.log(props);
  return (
    <div id="sunmoon">
      <Navbar />
      {props.children}
    </div>
  );
}
