import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Container, Fa } from "mdbreact";

class NavBar extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Container>
          <Navbar color="info-color" dark expand="md" style={{marginTop: "20px"}}>
            <NavbarBrand>
              <strong className="white-text">Navbar</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="envelope" className="mr-1" />Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="gear" className="mr-1" />Settings</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" className="mr-1" />Profile
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">My account</DropdownItem>
                      <DropdownItem href="#!">Log out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Navbar color="secondary-color" dark expand="md" style={{marginTop: "20px"}}>
            <NavbarBrand>
              <strong className="white-text">Navbar</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#!">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle  nav caret>
                      <div className="d-none d-md-inline">Dropdown</div>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default"right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light d-flex align-items-center" to="#!">1<Fa icon="envelope" className="ml-1" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle className="dopdown-toggle" nav>
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0" style={{height: "35px", padding: 0}} alt="" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">My account</DropdownItem>
                      <DropdownItem href="#!">Log out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
      </Container>
    );
  }
}

export default NavBar;