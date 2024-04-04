"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="flex flex-col">
          {/* <!-- Main Content --> */}
          <div id="content">
            <nav className="relative flex flex-wrap items-center content-between py-3 px-4 flex-no-wrap text-black bg-white topbar mb-4 static-top shadow">
              {/* <!-- ... Topbar navigation ... --> */}
            </nav>
            {/* <!-- Begin Page Content --> */}
            <div className="container mx-auto sm:px-4 max-w-full ">
              <div className="flex flex-wrap ">
                {/* <!-- NEW REQUEST Card --> */}
                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 mb-4">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 border-left-primary shadow h-full py-2">
                    <div className="flex-auto p-6">
                      <div className="flex flex-wrap  no-gutters items-center">
                        <div className="relative flex-grow max-w-full flex-1 px-4 mr-2">
                          <div className="text-xs font-bold text-blue-600 uppercase mb-1">
                            <a href="{% url 'new_request' %}">NEW REQUEST</a>
                          </div>
                          <div className="h5 mb-0 font-bold text-gray-800"></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- APPROVED Card --> */}
                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 mb-4">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 border-left-success shadow h-full py-2">
                    <div className="flex-auto p-6">
                      <div className="flex flex-wrap  no-gutters items-center">
                        <div className="relative flex-grow max-w-full flex-1 px-4 mr-2">
                          <div className="text-xs font-bold text-green-500 uppercase mb-1">
                            <Link href="/request/accepted">
                              APPROVED REQUESTS
                            </Link>
                          </div>
                          <div className="h5 mb-0 font-bold text-gray-800"></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- DECLINED Card --> */}
                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2  mb-4">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 border-left-danger shadow h-full py-2">
                    <div className="flex-auto p-6">
                      <div className="flex flex-wrap  no-gutters items-center">
                        <div className="relative flex-grow max-w-full flex-1 px-4 mr-2">
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">
                            <a href="{% url 'declined_requests' %}">
                              DECLINED REQUESTS
                            </a>
                          </div>
                          <div className="flex flex-wrap  no-gutters items-center">
                            <div className="col-auto">
                              <div className="h5 mb-0 mr-3 font-bold text-gray-800"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- PENDING Card --> */}
                <div className="xl:w-1/4 pl-4 md:w-1/2 pr-4 mb-4">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 border-left-warning shadow h-full py-2">
                    <div className="flex-auto p-6">
                      <div className="flex flex-wrap  no-gutters items-center">
                        <div className="relative flex-grow max-w-full flex-1 px-4 mr-2">
                          <div className="text-xs font-bold text-yellow-500 uppercase">
                            <a href="/request/pending">Pending Requests</a>
                          </div>
                          <div className="h5 mb-0 font-bold text-gray-800"></div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
