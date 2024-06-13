import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/home";
import CoursesPage from "@/pages/courses";
import LoginPage from "@/pages/login";
import DashLayout from "@/layouts/DashLayout";
import DashboardPage from "@/pages/account/dashboard";
import MyCoursesPage from "@/pages/account/my-courses";
import PrivateRoute from "@/routes/PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "courses",
				element: <CoursesPage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
		],
	},
	{
		path: "/account",
		element: (
			<PrivateRoute>
				<DashLayout />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
			{
				path: "my-courses",
				element: <MyCoursesPage />,
			},
		],
	},
]);
