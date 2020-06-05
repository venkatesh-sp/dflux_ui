import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CenteredModal from "components/modals/center";

const ModalTitle = () => {
  return <div>Create Dashboard</div>;
};

const ModalBody = () => {
  return <div>hi this body</div>;
};

function DashboardNavbar() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar>
      <Navbar.Brand href="#home">Dashboards</Navbar.Brand>

      <Form inline>
        <FormControl type="text" placeholder="Search here" className="mr-sm-2" />
      </Form>

      <Button variant="primary" onClick={() => setModalShow(true)} className="ml-auto">
        Create Dashboard
      </Button>
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={<ModalTitle />}
        body={<ModalBody />}
      />
    </Navbar>
  );
}
export default DashboardNavbar;
