import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CenteredModal from "components/modals/center";

const ModalTitle = () => {
  return <div>Create DataSource</div>;
};

const ModalBody = () => {
  return <div>hi this body</div>;
};

function DatasourceNavbar() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar>
      <Navbar.Brand href="#home">DataSources</Navbar.Brand>

      <Form inline>
        <FormControl type="text" placeholder="Search Data Source" className="mr-sm-2" />
      </Form>
      <Button variant="primary" onClick={() => setModalShow(true)} className="ml-auto">
        Create DataSource
      </Button>
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={<ModalTitle />}
        body={<ModalBody />}
      ></CenteredModal>
    </Navbar>
  );
}
export default DatasourceNavbar;
