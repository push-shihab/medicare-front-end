"use client";
import { Pagination } from "@heroui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaginationInAllDoctorPage = ({ allDoctors, page, setPage }) => {
  const totalItems = allDoctors.totalDoctor;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div className="pt-7">
      <Pagination className="justify-center w-full">
        <Pagination.Content className="gap-3 flex-wrap justify-center">
          <Pagination.Item>
            <Pagination.Previous
              isDisabled={page === 1}
              onPress={() => setPage((p) => p - 1)}
            >
              <Pagination.PreviousIcon>
                <FaArrowLeft></FaArrowLeft>
              </Pagination.PreviousIcon>
              <span>Back</span>
            </Pagination.Previous>
          </Pagination.Item>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p}>
              <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <Pagination.Next
              isDisabled={page === totalPages}
              onPress={() => setPage((p) => p + 1)}
            >
              <span>Forward</span>
              <Pagination.NextIcon>
                <FaArrowRight></FaArrowRight>
              </Pagination.NextIcon>
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
};

export default PaginationInAllDoctorPage;
