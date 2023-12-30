import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { sideBarConfig } from "../../utils/configs/adminSidebar";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        {sideBarConfig.map((category) => {
          const { heading, items } = category;
          return (
            <div key={heading}>
              <h5>{heading}</h5>
              <ul>
                {items.map((item) => {
                  const { name, path, icon: Icon } = item;
                  return (
                    <li
                      key={name}
                      style={{
                        ...(() => {
                          return location.pathname.includes(path)
                            ? { backgroundColor: "rgba(0,115,255,0.1)" }
                            : null;
                        })(),
                      }}
                    >
                      <Link
                        to={path}
                        style={{
                          color: location.pathname.includes(path)
                            ? "rgb(0,115,255)"
                            : "black",
                        }}
                      >
                        <Icon />
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default AdminSidebar;
