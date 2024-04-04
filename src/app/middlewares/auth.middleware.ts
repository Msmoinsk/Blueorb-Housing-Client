// import jwt from 'jsonwebtoken'
// import { User } from "@/models/User.model.js";
// import { Property } from "@/models/Poperty.model.js";
// import { NextRequest, NextResponse } from 'next/server';


// export function middleware(request: NextRequest) {

//     const path = request.nextUrl.pathname

//     const isPublicPath = path === '/login' || path === '/signup'

//     const token = request.cookies.get('token')?.value || ''

//     if (isPublicPath && token) {
//         return NextResponse.redirect(new URL('/', request.nextUrl)
//         )
//     }

//     if (!isPublicPath && !token) {
//         return NextResponse.redirect(new URL('/login', request.nextUrl))
//     }

// }

// export async function verifyJWT(request: NextRequest) {
//     try {

        


//     } catch (error) {

//     }
// }


// export const verifyJWT1 = async (req, _, next) => {
//     try {
//         const token =
//             req.cookies?.accessToken ||
//             req.header("Authorization")?.replace("Bearer ", "");


//         if (!token) {
//             throw new ApiError(401, "Unauthorized Access");
//         }

//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//         const user = await User.findById(decodedToken._id).select(
//             "-password -refreshToken"
//         );

//         if (!user) {
//             throw new ApiError(401, "Invalid Access Token");
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         // throw new ApiError(401, error?.message || "Invalid Access Token");
//     }
// };

// // export const verifyAuthority = (req, res, next) => {
// //   if (req.user.role === "user") {
// //     return res
// //       .status(401)
// //       .json({ success: false, message: "Unauthorized To Acess This Resource" });
// //   }
// //   next();
// // };

// // export const isOwnerOf = asyncHandler(async (req, res, next) => {
// //   const property = await Property.findById(req.params.id);

// //   if (!property) {
// //     throw new ApiError(404, "Property not found");
// //   }

// //   if (!req.user._id.equals(property.owner)) {
// //     console.log(
// //       !req.user._id.equals(property.owner),
// //       req.user._id,
// //       property.owner
// //     );
// //     throw new ApiError(403, "You are not allowed to edit this resource");
// //   }

// //   next();
// // });
