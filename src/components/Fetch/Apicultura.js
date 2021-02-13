import React, { useEffect, useState, useMemo } from "react";
import Header from "../Datatable/Header";
import { Pagination, Search } from "../Datatable";
import useFullPageLoader from "../../hooks/useFullPageLoader";
import Tabletop from 'tabletop'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ExportExcel } from "../ExcelDownloader/ExcelDownloader";


const Apicultura = () => {
  const [comments, setComments] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 8;

  const headers = [
    { name: "Cátedra", field: "Materia", sortable: true },
    { name: "Docente", field: "Docente", sortable: true },
    { name: "Email", field: "Email", sortable: false },
    { name: "Tel", field: "Tel", sortable: false },
    { name: "Plataforma", field: "Plataforma", sortable: false }
  ];

  useEffect(() => {
    showLoader();
    Tabletop.init({
      key: "10aDHQ5upKM-uEQtQmiNbA7z9XWCJvQFAjvoRCzoOyF0",
      simpleSheet: true
    })
      .then((data) => {
        hideLoader()
        setComments(data)
      })
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;

    if (search) {
      computedComments = computedComments.filter(
        comment =>
          comment.Materia.toLowerCase().includes(search.toLowerCase()) ||
          comment.Docente.toLowerCase().includes(search.toLowerCase()) ||
          comment.Email.toLowerCase().includes(search.toLowerCase()) ||
          comment.Plataforma.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedComments.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
        (a, b) =>
          reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search, sorting]);

  return (
    <>
      <div className="d-flex justify-content-center mt-1">
        <div className="m-3 col-12">
          <div
            className="accordion"
          >
            <div className="row justify-content-between header-table-desktop">
              <div className="col">
                <h3>Tec. Univ. en Apicultura</h3>
              </div>
              <div className="col d-flex justify-content-center">
                <Pagination
                  total={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentPage}
                  onPageChange={page => setCurrentPage(page)}
                />
              </div>
              <div className="col d-flex flex-row-reverse">
                <Search
                  onSearch={value => {
                    setSearch(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
            <div className="row header-table-mobile">
              <div className="container-fluid d-flex justify-content-center">
                <h3>Tec. Univ. en Apicultura</h3>
              </div>
              <div className="col d-flex flex-row-reverse justify-content-center mt-3">
                <Search
                  onSearch={value => {
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
                  onPageChange={page => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
          <div className="table-scroll">
            <table className="table table-striped">
              <Header
                headers={headers}
                onSorting={(field, order) =>
                  setSorting({ field, order })
                }
              />
              <tbody>
                {commentsData.map(comment => (
                  <tr>
                    <td>{comment.Materia}</td>
                    <td>{comment.Docente}</td>
                    <td>{comment.Email}</td>
                    <td>{comment.Tel}</td>
                    <td>{comment.Plataforma}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <div className="mt-2">
            <ExportExcel csvData={comments} fileName={'aulas-virtuales-apicultura'} />
          </div>
        </div>
      </div>
      {loader}
    </>
  );
};

export default Apicultura;