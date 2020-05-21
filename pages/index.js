import MainLayout from "../layouts/MainLayout";

function Home(props) {
  return (
    <div className="align-items-center d-flex h-100">
      <img src="images/dash.png" className="m-auto" />
    </div>
  );
}

Home.Layout = MainLayout;

export default Home;
