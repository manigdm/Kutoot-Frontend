import BreadcrumbCom from "../BreadcrumbCom";

export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div className="page-title-wrapper bg-qyellowlow/10 w-full">
      <div className="container-x mx-auto">
        <div className="mb-5">
          <BreadcrumbCom paths={breadcrumb} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold text-[#3B322B]">{title}</h1>
        </div>
      </div>
    </div>
  );
}
