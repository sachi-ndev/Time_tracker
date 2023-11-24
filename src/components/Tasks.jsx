import React, { useContext } from 'react'
import { ContextApi } from './Context/ContextApi'
import './../components/task.css'

export default function Tasks() {
    const{formData}=useContext(ContextApi)
    console.log(formData);
  return (
    <div>
        <div >
        <div className="p-3">
        <h2 className=' w-max py-2 px-5 rounded-md underline'>Tasks Completed</h2>
              <div className="h-[60vh] w-[90vw] mx-auto overflow-x-auto">
                <table className="table-auto  w-full">
                  <thead className=" text-xs  font-semibold uppercase text-gray-500 bg-gray-50">
                    <tr>
                      <th className="p-1 whitespace-nowrap">
                        <div className="font-semibold text-left">No</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Title</div>
                      </th>
                      <th className="p-2  w-[40vw] whitespace-nowrap">
                        <div className="font-semibold text-left">Discription</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Time Taken</div>
                      </th>
                 
                    </tr>
                  </thead>
                  <tbody className=" text-sm divide-y divide-gray-100">
                    {formData.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <p className="ml-2">{index + 1}</p>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                         
                              {data.title}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            
                            {data.description}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {data.time}
                        
                          </div>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

      </div>
    </div>
  )
}
