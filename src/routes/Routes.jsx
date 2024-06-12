import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/home";
import CoursesPage from "@/pages/courses";
import LoginPage from "@/pages/login";
import DashLayout from "@/layouts/DashLayout";
import DashboardPage from "@/pages/account/dashboard";

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
		element: <DashLayout />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
		],
	},
]);
