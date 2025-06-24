// import React from 'react'
// import { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';

// import 'react-toastify/dist/ReactToastify.css';

// const Manager = () => {
//     const ref = useRef()
//     const passwordRef = useRef()
//     const [form, setform] = useState({ site: "", username: "", password: "" })
//     const [passwordArray, setPasswordArray] = useState([])

//     useEffect(() => {
//         let passwords = localStorage.getItem("passwords");
//         if (passwords) {
//             setPasswordArray(JSON.parse(passwords))
//         }
//     }, [])

//     const copyText = (text) => {
//         toast('Copied to clipboard!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         });
//         navigator.clipboard.writeText(text)
//     }

//     const showPassword = () => {
//         passwordRef.current.type = "text"
//         console.log(ref.current.src)
//         if (ref.current.src.includes("icons/eyecross.png")) {
//             ref.current.src = "icons/eye.png"
//             passwordRef.current.type = "password"
//         }
//         else {
//             passwordRef.current.type = "text"
//             ref.current.src = "icons/eyecross.png"
//         }

//     }

//     const savePassword = () => {
//         if(form.site.length >3 && form.username.length >3 &&form.password.length >3){

//             setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
//             localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
//             console.log([...passwordArray, form])
//             setform({ site: "", username: "", password: "" })
//             toast('Password saved!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         });
//     }
//     else{
//         toast('Error: Password not saved!');
//     }

//     }

//     const deletePassword = (id) => {
//         console.log("Deleting password with id ", id)
//         let c = confirm("Do you really want to delete this password?")
//         if(c){
//             setPasswordArray(passwordArray.filter(item=>item.id!==id))
//             localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
//             toast('Password Deleted!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }

//     }
//     const editPassword = (id) => {

//         console.log("Editing password with id ", id)
//         setform(passwordArray.filter(i=>i.id===id)[0])
//         setPasswordArray(passwordArray.filter(item=>item.id!==id))

//     }

//     const handleChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition="Bounce"
//             />
//             {/* Same as */}
//             <ToastContainer />
//             <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
//             <div className=" p-3 md:mycontainer min-h-[88.2vh] ">
//                 <h1 className='text-4xl text font-bold text-center'>
//                     <span className='text-green-500'> &lt;</span>

//                     <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

//                 </h1>
//                 <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

//                 <div className="flex flex-col p-4 text-black gap-8 items-center">
//                     <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
//                     <div className="flex flex-col md:flex-row w-full justify-between gap-8">
//                         <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
//                         <div className="relative">

//                             <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="password" />
//                             <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
//                                 <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
//                             </span>
//                         </div>

//                     </div>
//                     <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
//                         <lord-icon
//                             src="https://cdn.lordicon.com/jgnvfzqg.json"
//                             trigger="hover" >
//                         </lord-icon>
//                         Save</button>
//                 </div>

//                 <div className="passwords">
//                     <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//                     {passwordArray.length === 0 && <div> No passwords to show</div>}
//                     {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
//                         <thead className='bg-green-800 text-white'>
//                             <tr>
//                                 <th className='py-2'>Site</th>
//                                 <th className='py-2'>Username</th>
//                                 <th className='py-2'>Password</th>
//                                 <th className='py-2'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-green-100'>
//                             {passwordArray.map((item, index) => {
//                                 return <tr key={index}>
//                                     <td className='py-2 border border-white text-center'>
//                                         <div className='flex items-center justify-center '>
//                                             <a href={item.site} target='_blank'>{item.site}</a>
//                                             <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
//                                                 <lord-icon
//                                                     style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='py-2 border border-white text-center'>
//                                         <div className='flex items-center justify-center '>
//                                             <span>{item.username}</span>
//                                             <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
//                                                 <lord-icon
//                                                     style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='py-2 border border-white text-center'>
//                                         <div className='flex items-center justify-center '>
//                                             <span>{item.password}</span>
//                                             <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
//                                                 <lord-icon
//                                                     style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                     src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                     trigger="hover" >
//                                                 </lord-icon>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className='justify-center py-2 border border-white text-center'>
//                                         <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/gwlusjdu.json"
//                                                 trigger="hover"
//                                                 style={{"width":"25px", "height":"25px"}}>
//                                             </lord-icon>
//                                         </span>
//                                         <span className='cursor-pointer mx-1'onClick={()=>{deletePassword(item.id)}}>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/skkahier.json"
//                                                 trigger="hover"
//                                                 style={{"width":"25px", "height":"25px"}}>
//                                             </lord-icon>
//                                         </span>
//                                     </td>
//                                 </tr>

//                             })}
//                         </tbody>
//                     </table>}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Manager

// updated adding ncryption and decryption
// import React, { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
// import { generateKey, encryptData, decryptData } from '../lib/cryptoUtils';

// import 'react-toastify/dist/ReactToastify.css';

// const Manager = () => {
//   const ref = useRef();
//   const passwordRef = useRef();
//   const [form, setform] = useState({ site: '', username: '', password: '' });
//   const [passwordArray, setPasswordArray] = useState([]);

//   // Load and decrypt passwords on mount
//   useEffect(() => {
//     const loadPasswords = async () => {
//       const stored = localStorage.getItem('passwords');
//       if (stored) {
//         try {
//           const key = await generateKey('master-password');
//           const decrypted = await decryptData(JSON.parse(stored), key);
//           setPasswordArray(decrypted);
//         } catch (err) {
//           console.error('Decryption error:', err);
//           toast.error('Failed to decrypt saved passwords!');
//         }
//       }
//     };
//     loadPasswords();
//   }, []);

//   const showPassword = () => {
//     if (ref.current.src.includes('icons/eyecross.png')) {
//       ref.current.src = 'icons/eye.png';
//       passwordRef.current.type = 'password';
//     } else {
//       ref.current.src = 'icons/eyecross.png';
//       passwordRef.current.type = 'text';
//     }
//   };

//   const copyText = (text) => {
//     navigator.clipboard.writeText(text);
//     toast('Copied to clipboard!', {
//       position: 'top-right',
//       autoClose: 3000,
//       theme: 'dark',
//     });
//   };

//   const savePassword = async () => {
//     if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
//       const updatedArray = [...passwordArray, { ...form, id: uuidv4() }];
//       setPasswordArray(updatedArray);

//       try {
//         const key = await generateKey('master-password');
//         const encrypted = await encryptData(updatedArray, key);
//         localStorage.setItem('passwords', JSON.stringify(encrypted));
//         setform({ site: '', username: '', password: '' });
//         toast.success('Password saved!');
//       } catch (err) {
//         console.error('Encryption failed:', err);
//         toast.error('Failed to save password.');
//       }
//     } else {
//       toast.error('All fields must have at least 4 characters.');
//     }
//   };

//   const deletePassword = async (id) => {
//     const confirmDelete = confirm('Do you really want to delete this password?');
//     if (confirmDelete) {
//       const updated = passwordArray.filter((item) => item.id !== id);
//       setPasswordArray(updated);
//       try {
//         const key = await generateKey('master-password');
//         const encrypted = await encryptData(updated, key);
//         localStorage.setItem('passwords', JSON.stringify(encrypted));
//         toast('Password deleted!', { position: 'top-right', theme: 'dark' });
//       } catch (err) {
//         toast.error('Failed to delete password securely.');
//       }
//     }
//   };

//   const editPassword = (id) => {
//     const selected = passwordArray.find((i) => i.id === id);
//     setform(selected);
//     setPasswordArray(passwordArray.filter((item) => item.id !== id));
//   };

//   const handleChange = (e) => {
//     setform({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//       </div>

//       <div className="p-3 md:mycontainer min-h-[88.2vh]">
//         <h1 className="text-4xl text font-bold text-center">
//           <span className="text-green-500"> &lt;</span>Pass
//           <span className="text-green-500">OP/&gt;</span>
//         </h1>
//         <p className="text-green-900 text-lg text-center">Your own Password Manager</p>

//         <div className="flex flex-col p-4 text-black gap-8 items-center">
//           <input
//             value={form.site}
//             onChange={handleChange}
//             placeholder="Enter website URL"
//             className="rounded-full border border-green-500 w-full p-4 py-1"
//             type="text"
//             name="site"
//           />
//           <div className="flex flex-col md:flex-row w-full justify-between gap-8">
//             <input
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Enter Username"
//               className="rounded-full border border-green-500 w-full p-4 py-1"
//               type="text"
//               name="username"
//             />
//             <div className="relative">
//               <input
//                 ref={passwordRef}
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//                 className="rounded-full border border-green-500 w-full p-4 py-1"
//                 type="password"
//                 name="password"
//               />
//               <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
//                 <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
//               </span>
//             </div>
//           </div>
//           <button
//             onClick={savePassword}
//             className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
//           >
//             <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
//             Save
//           </button>
//         </div>

//         <div className="passwords">
//           <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
//           {passwordArray.length === 0 ? (
//             <div>No passwords to show</div>
//           ) : (
//             <table className="table-auto w-full rounded-md overflow-hidden mb-10">
//               <thead className="bg-green-800 text-white">
//                 <tr>
//                   <th className="py-2">Site</th>
//                   <th className="py-2">Username</th>
//                   <th className="py-2">Password</th>
//                   <th className="py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-green-100">
//                 {passwordArray.map((item, index) => (
//                   <tr key={index}>
//                     <td className="py-2 border border-white text-center">
//                       <div className="flex items-center justify-center">
//                         <a href={item.site} target="_blank" rel="noopener noreferrer">
//                           {item.site}
//                         </a>
//                         <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.site)}>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/iykgtsbt.json"
//                             trigger="hover"
//                             style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
//                           ></lord-icon>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-2 border border-white text-center">
//                       <div className="flex items-center justify-center">
//                         <span>{item.username}</span>
//                         <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/iykgtsbt.json"
//                             trigger="hover"
//                             style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
//                           ></lord-icon>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-2 border border-white text-center">
//                       <div className="flex items-center justify-center">
//                         <span>{item.password}</span>
//                         <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.password)}>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/iykgtsbt.json"
//                             trigger="hover"
//                             style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
//                           ></lord-icon>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="justify-center py-2 border border-white text-center">
//                       <span className="cursor-pointer mx-1" onClick={() => editPassword(item.id)}>
//                         <lord-icon
//                           src="https://cdn.lordicon.com/gwlusjdu.json"
//                           trigger="hover"
//                           style={{ width: '25px', height: '25px' }}
//                         ></lord-icon>
//                       </span>
//                       <span className="cursor-pointer mx-1" onClick={() => deletePassword(item.id)}>
//                         <lord-icon
//                           src="https://cdn.lordicon.com/skkahier.json"
//                           trigger="hover"
//                           style={{ width: '25px', height: '25px' }}
//                         ></lord-icon>
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;

// updated version with strength chechker
// import React, { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
// import { generateKey, encryptData, decryptData } from "../lib/cryptoUtils";
// import 'react-toastify/dist/ReactToastify.css';

// // 👉 Helper functions
// const generatePassword = (length = 12) => {
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//   return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
// };

// const checkPasswordStrength = (password) => {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[a-z]/.test(password)) score++;
//   if (/\d/.test(password)) score++;
//   if (/[\W_]/.test(password)) score++;

//   if (score <= 2) return "Weak";
//   if (score === 3 || score === 4) return "Moderate";
//   return "Strong";
// };

// const Manager = () => {
//   const ref = useRef();
//   const passwordRef = useRef();

//   const [form, setform] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setPasswordArray] = useState([]);
//   const [strength, setStrength] = useState("");

//   useEffect(() => {
//     const loadPasswords = async () => {
//       const stored = localStorage.getItem('passwords');
//       if (!stored) return;

//       try {
//         const parsed = JSON.parse(stored);
//         if (!parsed?.iv || !parsed?.data) return;

//         const key = await generateKey("master-password");
//         const decrypted = await decryptData(parsed, key);

//         if (Array.isArray(decrypted)) {
//           setPasswordArray(decrypted);
//         } else {
//           toast.error("Invalid format of decrypted data.");
//         }
//       } catch (err) {
//         toast.error("Decryption failed.");
//         console.error(err);
//       }
//     };

//     loadPasswords();
//   }, []);

//   const copyText = (text) => {
//     toast('Copied to clipboard!', {
//       position: "top-right",
//       autoClose: 3000,
//       theme: "dark",
//     });
//     navigator.clipboard.writeText(text);
//   };

//   const showPassword = () => {
//     if (ref.current.src.includes("eyecross")) {
//       ref.current.src = "icons/eye.png";
//       passwordRef.current.type = "password";
//     } else {
//       ref.current.src = "icons/eyecross.png";
//       passwordRef.current.type = "text";
//     }
//   };

//   const savePassword = async () => {
//     if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
//       const newPass = { ...form, id: uuidv4() };
//       const updatedArray = [...passwordArray, newPass];

//       try {
//         const key = await generateKey("master-password");
//         const encrypted = await encryptData(updatedArray, key);
//         localStorage.setItem("passwords", JSON.stringify(encrypted));
//         setPasswordArray(updatedArray);
//         setform({ site: "", username: "", password: "" });
//         setStrength("");
//         toast.success("Password saved!");
//       } catch (err) {
//         toast.error("Failed to encrypt.");
//         console.error(err);
//       }
//     } else {
//       toast.error("All fields must be at least 4 characters.");
//     }
//   };

//   const deletePassword = async (id) => {
//     if (!confirm("Do you really want to delete this password?")) return;
//     const updated = passwordArray.filter(item => item.id !== id);
//     setPasswordArray(updated);

//     try {
//       const key = await generateKey("master-password");
//       const encrypted = await encryptData(updated, key);
//       localStorage.setItem("passwords", JSON.stringify(encrypted));
//       toast.success("Password deleted!");
//     } catch (err) {
//       toast.error("Delete failed.");
//     }
//   };

//   const editPassword = (id) => {
//     const item = passwordArray.find(i => i.id === id);
//     if (!item) return;
//     setform(item);
//     setStrength(checkPasswordStrength(item.password));
//     setPasswordArray(passwordArray.filter(i => i.id !== id));
//   };

//   const handleChange = (e) => {
//     const updated = { ...form, [e.target.name]: e.target.value };
//     setform(updated);
//     if (e.target.name === "password") {
//       setStrength(checkPasswordStrength(updated.password));
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//       </div>

//       <div className="p-3 md:mycontainer min-h-[88.2vh]">
//         <h1 className='text-4xl font-bold text-center'>
//           <span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>OP/&gt;</span>
//         </h1>
//         <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

//         <div className="flex flex-col p-4 text-black gap-8 items-center">
//           <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" />
//           <div className="flex flex-col md:flex-row w-full justify-between gap-8">
//             <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" />
//             <div className="relative w-full">
//               <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" />
//               <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
//                 <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
//               </span>
//               <div className="flex items-center gap-2 mt-1 px-2">
//                 <button
//                   onClick={() => {
//                     const gen = generatePassword();
//                     setform({ ...form, password: gen });
//                     passwordRef.current.type = "text";
//                     ref.current.src = "icons/eyecross.png";
//                     setStrength(checkPasswordStrength(gen));
//                   }}
//                   className="text-sm bg-green-300 hover:bg-green-400 px-3 py-1 rounded-full"
//                 >
//                   Generate
//                 </button>
//                 {form.password && (
//                   <span className={`text-sm font-medium ${
//                     strength === "Strong"
//                       ? "text-green-600"
//                       : strength === "Moderate"
//                       ? "text-yellow-600"
//                       : "text-red-600"
//                   }`}>
//                     {strength} Password
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//           <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
//             <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" ></lord-icon>
//             Save
//           </button>
//         </div>

//         <div className="passwords">
//           <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//           {passwordArray.length === 0 && <div> No passwords to show</div>}
//           {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
//             <thead className='bg-green-800 text-white'>
//               <tr>
//                 <th className='py-2'>Site</th>
//                 <th className='py-2'>Username</th>
//                 <th className='py-2'>Password</th>
//                 <th className='py-2'>Actions</th>
//               </tr>
//             </thead>
//             <tbody className='bg-green-100'>
//               {passwordArray.map((item, index) => (
//                 <tr key={index}>
//                   <td className='py-2 border border-white text-center'>
//                     <div className='flex items-center justify-center'>
//                       <a href={item.site} target='_blank'>{item.site}</a>
//                       <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)}>
//                         <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" ></lord-icon>
//                       </div>
//                     </div>
//                   </td>
//                   <td className='py-2 border border-white text-center'>
//                     <div className='flex items-center justify-center'>
//                       <span>{item.username}</span>
//                       <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
//                         <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" ></lord-icon>
//                       </div>
//                     </div>
//                   </td>
//                   <td className='py-2 border border-white text-center'>
//                     <div className='flex items-center justify-center'>
//                       <span>{item.password}</span>
//                       <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
//                         <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" ></lord-icon>
//                       </div>
//                     </div>
//                   </td>
//                   <td className='py-2 border border-white text-center'>
//                     <span className='cursor-pointer mx-1' onClick={() => editPassword(item.id)}>
//                       <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" style={{ width: "25px", height: "25px" }}></lord-icon>
//                     </span>
//                     <span className='cursor-pointer mx-1' onClick={() => deletePassword(item.id)}>
//                       <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" style={{ width: "25px", height: "25px" }}></lord-icon>
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;

// with new ui features
// import React, { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
// import { generateKey, encryptData, decryptData } from "../lib/cryptoUtils";
// import 'react-toastify/dist/ReactToastify.css';

// const Manager = () => {
//   const ref = useRef();
//   const passwordRef = useRef();
//   const [form, setform] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setPasswordArray] = useState([]);
//   const [strength, setStrength] = useState("");

//   useEffect(() => {
//     const loadPasswords = async () => {
//       const stored = localStorage.getItem('passwords');
//       if (!stored) return;

//       try {
//         const parsed = JSON.parse(stored);
//         if (!parsed?.iv || !parsed?.data) return;

//         const key = await generateKey("master-password");
//         const decrypted = await decryptData(parsed, key);
//         if (Array.isArray(decrypted)) setPasswordArray(decrypted);
//       } catch (err) {
//         console.error(err);
//         toast.error("Decryption failed.");
//       }
//     };
//     loadPasswords();
//   }, []);

//   const copyText = (text) => {
//     navigator.clipboard.writeText(text);
//     toast("Copied to clipboard!", { position: "top-right", autoClose: 3000, theme: "dark" });
//   };

//   const showPassword = () => {
//     if (ref.current.src.includes("eyecross")) {
//       ref.current.src = "icons/eye.png";
//       passwordRef.current.type = "password";
//     } else {
//       ref.current.src = "icons/eyecross.png";
//       passwordRef.current.type = "text";
//     }
//   };

//   const generatePassword = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
//     return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
//   };

//   const checkPasswordStrength = (password) => {
//     let score = 0;
//     if (password.length >= 8) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;
//     if (score >= 4) return "Strong";
//     if (score >= 2) return "Moderate";
//     return "Weak";
//   };

//   const savePassword = async () => {
//     if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
//       const newPass = { ...form, id: uuidv4() };
//       const updatedArray = [...passwordArray, newPass];

//       try {
//         const key = await generateKey("master-password");
//         const encrypted = await encryptData(updatedArray, key);
//         localStorage.setItem("passwords", JSON.stringify(encrypted));
//         setPasswordArray(updatedArray);
//         setform({ site: "", username: "", password: "" });
//         setStrength("");
//         toast("Password saved!", { position: "top-right", autoClose: 3000, theme: "dark" });
//       } catch (err) {
//         toast("Encryption failed!");
//         console.error("Encryption error:", err);
//       }
//     } else {
//       toast("Error: Fill all fields with at least 4 characters.");
//     }
//   };

//   const deletePassword = async (id) => {
//     if (!confirm("Do you really want to delete this password?")) return;
//     const updated = passwordArray.filter(item => item.id !== id);
//     setPasswordArray(updated);

//     try {
//       const key = await generateKey("master-password");
//       const encrypted = await encryptData(updated, key);
//       localStorage.setItem("passwords", JSON.stringify(encrypted));
//       toast("Password Deleted!", { position: "top-right", autoClose: 3000, theme: "dark" });
//     } catch (err) {
//       toast("Error saving after delete!");
//       console.error("Encryption error on delete:", err);
//     }
//   };

//   const editPassword = (id) => {
//     const selected = passwordArray.find((item) => item.id === id);
//     setform(selected);
//     setStrength(checkPasswordStrength(selected.password));
//     passwordRef.current.type = "password";
//     ref.current.src = "icons/eye.png";
//     setPasswordArray(passwordArray.filter((item) => item.id !== id));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setform({ ...form, [name]: value });
//     if (name === "password") {
//       setStrength(checkPasswordStrength(value));
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="p-3 md:mycontainer min-h-[88.2vh]">
//         <h1 className='text-5xl font-bold text-center mb-1 tracking-tight'>
//           <span className='text-green-500'>&lt;</span>Pass<span className='text-green-500'>OP/&gt;</span>
//         </h1>
//         <p className='text-green-800 text-lg text-center mb-6 italic'>Your personal secure password vault</p>

//         {/* Form */}
//         <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl text-black gap-6 max-w-3xl mx-auto mb-10">
//           <input
//             value={form.site}
//             onChange={handleChange}
//             placeholder='Enter website URL'
//             className='rounded-md border border-green-400 w-full p-3'
//             type="text"
//             name="site"
//           />

//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               value={form.username}
//               onChange={handleChange}
//               placeholder='Enter Username'
//               className='rounded-md border border-green-400 w-full p-3'
//               type="text"
//               name="username"
//             />

//             <div className="relative w-full">
//               <input
//                 ref={passwordRef}
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder='Enter Password'
//                 className='rounded-md border border-green-400 w-full p-3 pr-10'
//                 type="password"
//                 name="password"
//               />
//               <span className='absolute right-2 top-2.5 cursor-pointer' onClick={showPassword}>
//                 <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
//               </span>
//               <div className="flex items-center gap-2 mt-2 px-1">
//                 <button
//                   onClick={() => {
//                     const gen = generatePassword();
//                     setform({ ...form, password: gen });
//                     passwordRef.current.type = "text";
//                     ref.current.src = "icons/eyecross.png";
//                     setStrength(checkPasswordStrength(gen));
//                   }}
//                   className="text-sm bg-green-500 text-white hover:bg-green-600 px-4 py-1 rounded-full"
//                 >
//                   Generate
//                 </button>
//                 {form.password && (
//                   <span className={`text-xs px-2 py-1 rounded-full ${
//                     strength === "Strong"
//                       ? "bg-green-100 text-green-800"
//                       : strength === "Moderate"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-red-100 text-red-600"
//                   }`}>
//                     {strength}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={savePassword}
//             className='flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 transition-all duration-200'
//           >
//             <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
//             Save Password
//           </button>
//         </div>

//         {/* Password List */}
//         <div className="passwords max-w-5xl mx-auto">
//           <h2 className='font-bold text-2xl py-4 text-green-800'>Your Passwords</h2>
//           {passwordArray.length === 0 ? (
//             <div className="text-gray-600">No passwords saved yet.</div>
//           ) : (
//             <div className="overflow-x-auto shadow-sm rounded-md">
//               <table className="w-full text-sm border-collapse">
//                 <thead className='bg-green-700 text-white sticky top-0'>
//                   <tr>
//                     <th className='py-2 px-4'>Site</th>
//                     <th className='py-2 px-4'>Username</th>
//                     <th className='py-2 px-4'>Password</th>
//                     <th className='py-2 px-4'>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className='bg-green-50'>
//                   {passwordArray.map((item, index) => (
//                     <tr key={index} className="even:bg-green-100">
//                       <td className='py-2 px-4 text-center'>
//                         <div className='flex items-center justify-center gap-1'>
//                           <a href={item.site} target='_blank' rel="noreferrer">{item.site}</a>
//                           <span className='cursor-pointer' onClick={() => copyText(item.site)}>
//                             <lord-icon style={{ width: "20px", height: "20px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
//                           </span>
//                         </div>
//                       </td>
//                       <td className='py-2 px-4 text-center'>
//                         <div className='flex items-center justify-center gap-1'>
//                           {item.username}
//                           <span className='cursor-pointer' onClick={() => copyText(item.username)}>
//                             <lord-icon style={{ width: "20px", height: "20px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
//                           </span>
//                         </div>
//                       </td>
//                       <td className='py-2 px-4 text-center'>
//                         <div className='flex items-center justify-center gap-1'>
//                           {item.password}
//                           <span className='cursor-pointer' onClick={() => copyText(item.password)}>
//                             <lord-icon style={{ width: "20px", height: "20px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
//                           </span>
//                         </div>
//                       </td>
//                       <td className='py-2 px-4 text-center space-x-2'>
//                         <span className='cursor-pointer' onClick={() => editPassword(item.id)}>
//                           <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" style={{ width: "22px", height: "22px" }} />
//                         </span>
//                         <span className='cursor-pointer' onClick={() => deletePassword(item.id)}>
//                           <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" style={{ width: "22px", height: "22px" }} />
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;

import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { generateKey, encryptData, decryptData } from "../lib/cryptoUtils";
import { Dice5 } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [strength, setStrength] = useState("");

  const [unlocked, setUnlocked] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  // On initial load, check if encrypted data exists
  useEffect(() => {
    const encrypted = localStorage.getItem("passwords");
    if (!encrypted) {
      setIsNewUser(true); // no password exists yet
    }
  }, []);

  const handleMasterPasswordSubmit = async () => {
    if (!masterPassword || masterPassword.length < 4) {
      toast.error("Master password must be at least 4 characters.");
      return;
    }

    try {
      const stored = localStorage.getItem("passwords");
      const savedHash = localStorage.getItem("masterHash");

      // First-time user
      if (!stored && isNewUser) {
        const key = await generateKey(masterPassword);
        const encrypted = await encryptData([], key);
        localStorage.setItem("passwords", JSON.stringify(encrypted));
        localStorage.setItem("masterHash", btoa(masterPassword)); // saving in base64
        setUnlocked(true);
        toast.success("Master password set and vault created!");
        return;
      }

      // Returning user
      if (savedHash !== btoa(masterPassword)) {
        toast.error("Incorrect master password.");
        return;
      }

      const key = await generateKey(masterPassword);
      const parsed = JSON.parse(stored);
      const decrypted = await decryptData(parsed, key);

      if (Array.isArray(decrypted)) {
        setPasswordArray(decrypted);
        setUnlocked(true);
        toast.success("Vault unlocked!");
      } else {
        toast.error("Decryption failed.");
      }
    } catch (err) {
      toast.error("Incorrect master password or data corrupted.");
      console.error(err);
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const showPassword = () => {
    if (ref.current.src.includes("eyecross")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return Array.from(
      { length: 12 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  };

  const checkPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score >= 4) return "Strong";
    if (score >= 2) return "Moderate";
    return "Weak";
  };

  const savePassword = async () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const newPass = { ...form, id: uuidv4() };
      const updatedArray = [...passwordArray, newPass];

      try {
        const key = await generateKey(masterPassword);
        const encrypted = await encryptData(updatedArray, key);
        localStorage.setItem("passwords", JSON.stringify(encrypted));
        setPasswordArray(updatedArray);
        setform({ site: "", username: "", password: "" });
        setStrength("");
        toast("Password saved!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      } catch (err) {
        toast("Encryption failed!");
        console.error("Encryption error:", err);
      }
    } else {
      toast("Fill all fields with at least 4 characters.");
    }
  };

  const deletePassword = async (id) => {
    if (!confirm("Do you really want to delete this password?")) return;
    const updated = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updated);

    try {
      const key = await generateKey(masterPassword);
      const encrypted = await encryptData(updated, key);
      localStorage.setItem("passwords", JSON.stringify(encrypted));
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      toast("Error saving after delete!");
      console.error("Encryption error on delete:", err);
    }
  };

  const editPassword = (id) => {
    const selected = passwordArray.find((item) => item.id === id);
    setform(selected);
    setStrength(checkPasswordStrength(selected.password));
    passwordRef.current.type = "password";
    ref.current.src = "icons/eye.png";
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    if (name === "password") {
      setStrength(checkPasswordStrength(value));
    }
  };

  // 🔒 Show unlock screen first
  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 text-center">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-sm w-full">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            {isNewUser ? "Set Your Master Password" : "Enter Master Password"}
          </h2>
          <input
            type="password"
            value={masterPassword}
            onChange={(e) => setMasterPassword(e.target.value)}
            className="w-full border border-green-400 rounded-md p-2 mb-4"
            placeholder="Master Password"
          />
          <button
            onClick={handleMasterPasswordSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full w-full"
          >
            {isNewUser ? "Set & Unlock" : "Unlock Vault"}
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  // ✅ Everything else stays same, your existing UI:
  return (
    <>
      <ToastContainer />
      <div className="p-3 md:mycontainer min-h-[88.2vh]">
        <h1 className="text-5xl font-bold text-center mb-1 tracking-tight">
          <span className="text-green-500">&lt;</span>Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-800 text-lg text-center mb-6 italic">
          Your personal secure password vault
        </p>
        {/* Form */}
        <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl text-black gap-6 max-w-3xl mx-auto mb-10">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-md border border-green-400 w-full p-3"
            type="text"
            name="site"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-md border border-green-400 w-full p-3"
              type="text"
              name="username"
            />

            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-md border border-green-400 w-full p-3 pr-20"
                type="password"
                name="password"
              />

              {/* Eye Icon */}
              <span
                className="absolute right-14 top-2.5 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>

              {/* Generate Icon (Dice) */}
              {/* <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => {
                  const gen = generatePassword();
                  setform({ ...form, password: gen });
                  passwordRef.current.type = "text";
                  ref.current.src = "icons/eyecross.png";
                  setStrength(checkPasswordStrength(gen));
                }}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/lyrrgrsl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#22c55e"
                  style={{ width: "28px", height: "28px" }}
                ></lord-icon>
              </span> */}

              {/* Generate Icon (Dice) */}
              <span
                className="absolute right-2 top-2.5 cursor-pointer text-green-600 hover:text-green-800"
                onClick={() => {
                  const gen = generatePassword();
                  setform({ ...form, password: gen });
                  passwordRef.current.type = "text";
                  ref.current.src = "icons/eyecross.png";
                  setStrength(checkPasswordStrength(gen));
                }}
              >
                <Dice5 size={24} />
              </span>

              {/* Strength */}
              {form.password && (
                <div className="mt-2 px-1">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      strength === "Strong"
                        ? "bg-green-100 text-green-800"
                        : strength === "Moderate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {strength}
                  </span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 transition-all duration-200"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        {/* Password List */}
        <div className="passwords max-w-5xl mx-auto">
          <h2 className="font-bold text-2xl py-4 text-green-800">
            Your Passwords
          </h2>
          {passwordArray.length === 0 ? (
            <div className="text-gray-600">No passwords saved yet.</div>
          ) : (
            <div className="overflow-x-auto shadow-sm rounded-md">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-green-700 text-white sticky top-0">
                  <tr>
                    <th className="py-2 px-4">Site</th>
                    <th className="py-2 px-4">Username</th>
                    <th className="py-2 px-4">Password</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-50">
                  {passwordArray.map((item, index) => (
                    <tr key={index} className="even:bg-green-100">
                      <td className="py-2 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <a href={item.site} target="_blank" rel="noreferrer">
                            {item.site}
                          </a>
                          <span
                            className="cursor-pointer"
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{ width: "20px", height: "20px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            />
                          </span>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          {item.username}
                          <span
                            className="cursor-pointer"
                            onClick={() => copyText(item.username)}
                          >
                            <lord-icon
                              style={{ width: "20px", height: "20px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            />
                          </span>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          {item.password}
                          <span
                            className="cursor-pointer"
                            onClick={() => copyText(item.password)}
                          >
                            <lord-icon
                              style={{ width: "20px", height: "20px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            />
                          </span>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-center space-x-2">
                        <span
                          className="cursor-pointer"
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "22px", height: "22px" }}
                          />
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "22px", height: "22px" }}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
