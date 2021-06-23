import React, { useEffect, useState, useMemo } from "react";
import Header from "../Datatable/Header";
import { Pagination, Search } from "../Datatable";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import Tabletop from "tabletop";
import "bootstrap/dist/css/bootstrap.min.css";

const TableSearch = (props) => {
  const [data, setdata] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const keyApi = props.keyApi;
  const name = props.name;

  const ITEMS_PER_PAGE = 8;

  const headers = [
    { name: "Asignatura", field: "Asignatura", sortable: true },
    { name: "Días", field: "Dias", sortable: true },
    { name: "Horario", field: "Horario", sortable: false },
    { name: "Enlace", field: "Enlace", sortable: false },
    { name: "Jefe de Cátedra", field: "JefeCatedra", sortable: true },
    { name: "Correo", field: "Correo", sortable: false },
  ];

  useEffect(() => {
    showLoader();
    Tabletop.init({
      key: keyApi,
      simpleSheet: true,
    }).then((data) => {
      hideLoader();
      setdata(data);
    });
  }, []);

  const dataData = useMemo(() => {
    let computeddata = data;

    if (search) {
      computeddata = computeddata.filter(
        (data) =>
          data.Asignatura.toLowerCase().includes(search.toLowerCase()) ||
          data.Dias.toLowerCase().includes(search.toLowerCase()) ||
          data.Horario.toLowerCase().includes(search.toLowerCase()) ||
          data.Enlace.toLowerCase().includes(search.toLowerCase()) ||
          data.JefeCatedra.toLowerCase().includes(search.toLowerCase()) ||
          data.Correo.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computeddata.length);

    //Sorting data
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computeddata = computeddata.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computeddata.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage, search, sorting]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="blank-container"></div>
        <div className="m-3 col-12">
          <div className="accordion">
            <div className="row justify-content-between header-table-desktop">
              <div className="col">
                <h3>{name}</h3>
              </div>
              <div className="col d-flex justify-content-center">
                <Pagination
                  total={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
              <div className="col d-flex flex-row-reverse">
                <Search
                  onSearch={(value) => {
                    setSearch(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
            <div className="row header-table-mobile">
              <div className="container-fluid d-flex justify-content-center">
                <h3>Ing. Agronómica</h3>
              </div>
              <div className="col d-flex flex-row-reverse justify-content-center mt-3">
                <Search
                  onSearch={(value) => {
                    setSearch(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
              <div className="container-fluid d-flex justify-content-center mt-3">
                <Pagination
                  total={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>

          <div className="table-scroll">
            <table className="table table-striped">
              <Header
                headers={headers}
                onSorting={(field, order) => setSorting({ field, order })}
              />
              <tbody>
                {dataData.map((data) => (
                  <tr>
                    <td>{data.Asignatura}</td>
                    <td>{data.Dias}</td>
                    <td>{data.Horario}</td>
                    <td>{data.Enlace}</td>
                    <td>{data.JefeCatedra}</td>
                    <td>{data.Correo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {loader}
    </>
  );
};

export default TableSearch;
