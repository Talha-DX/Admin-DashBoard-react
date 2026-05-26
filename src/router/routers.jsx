import { lazy } from "react";

/* Dashboard */
const Dashboard = lazy(() => import('../Pages/DashBoard/Ecommerce'));
const Analytics = lazy(() => import('../Pages/DashBoard/Analytics'));
const Marketing = lazy(() => import('../Pages/DashBoard/Marketing'));
const Stocks = lazy(() => import('../Pages/DashBoard/Stocks'));
const SaaS = lazy(() => import('../Pages/DashBoard/SaaS'));
const Logistics = lazy(() => import('../Pages/DashBoard/Logistics'));

/* AI */
const TextGenerator = lazy(() => import('../Pages/AI_Assistant/TextGenerator'));
const ImageGenerator = lazy(() => import('../Pages/AI_Assistant/ImageGenerator'));
const CodeGenerator = lazy(() => import('../Pages/AI_Assistant/CodeGenerator'));
const VideoGenerator = lazy(() => import('../Pages/AI_Assistant/VideoGenerator'));
const AISettings = lazy(() => import('../Pages/AI_Assistant/AISetting'));

/* Ecommerce */
const Products = lazy(() => import('../Pages/ECommerce/Products'));
const AddProduct = lazy(() => import('../Pages/ECommerce/AddProducts'));
const Billing = lazy(() => import('../Pages/ECommerce/Billing'));
const Invoices = lazy(() => import('../Pages/ECommerce/Invoices'));
const SingleInvoice = lazy(() => import('../Pages/ECommerce/SingleInvoices'));

/* Calendar */
const Chat = lazy(() => import('../Pages/Chat'));
const Calendar = lazy(() => import('../Pages/Calendar'));

/* Tasks */
const List = lazy(() => import('../Pages/Task/List'));
const Kandon = lazy(() => import('../Pages/Task/Kanban')); // Make sure this file exists and exports default

/* Forms */
const FormLayout = lazy(() => import('../Pages/Forms/FormLayouts'));
const FormElement = lazy(() => import('../Pages/Forms/FormElements'));

/* Pages */
const Error404 = lazy(() => import('../Pages/Page/Error404'));
const Error500 = lazy(() => import('../Pages/Page/Error500'));
const Error503 = lazy(() => import('../Pages/Page/Error503'));

/* Layouts - Make sure these files exist */
const LayoutOne = lazy(() => import('../Pages/Layouts/LayerOne'));
const LayoutTwo = lazy(() => import('../Pages/Layouts/Layertwo'));

/* Support */
const TicketList = lazy(() => import('../Pages/Ticket_Support/TicketList'));
const TicketsReplay = lazy(() => import('../Pages/Ticket_Support/TicketReply'));

/* Email */
const Inbox = lazy(() => import('../Pages/E-mail/Inbox'));
const Details = lazy(() => import('../Pages/E-mail/Details'));

/* Charts */
const LineChart = lazy(() => import('../Pages/Charts/LineChart'));
const PieChart = lazy(() => import('../Pages/Charts/PieChart'));
const BarChart = lazy(() => import('../Pages/Charts/BarChart'));

/* Maps */
const Maps = lazy(() => import('../Pages/Maps/Map'));
const VectorsMap = lazy(() => import('../Pages/Maps/VectorMaps'));

/* Auth */
const SignIn = lazy(() => import('../Pages/Authentication/Signin'));
const SignUp = lazy(() => import('../Pages/Authentication/Signup'));
const TwoFactorAuthentication = lazy(() => import('../Pages/Authentication/TwoFactor'));
const ResetPassword = lazy(() => import('../Pages/Authentication/Resetpassword'));

const router = [
  /* Dashboard */
  { path: "/", element: <Dashboard /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/marketing", element: <Marketing /> },
  { path: "/stocks", element: <Stocks /> },
  { path: "/saas", element: <SaaS /> },
  { path: "/logistics", element: <Logistics /> },

  /* AI */
  { path: "/text-generator", element: <TextGenerator /> },
  { path: "/image-generator", element: <ImageGenerator /> },
  { path: "/code-generator", element: <CodeGenerator /> },
  { path: "/video-generator", element: <VideoGenerator /> },
  { path: "/settings", element: <AISettings /> },

  /* Ecommerce */
  { path: "/products", element: <Products /> },
  { path: "/productsadd", element: <AddProduct /> },
  { path: "/billing", element: <Billing /> },
  { path: "/invoices", element: <Invoices /> },
  { path: "/single-invoice", element: <SingleInvoice /> },

  /* Calendar */
  { path: "/calendar", element: <Calendar /> },

  /* Tasks */
  { path: "/list", element: <List /> },
  { path: "/kanban", element: <Kandon /> },

  /* Forms */
  { path: "/layout", element: <FormLayout /> },
  { path: "/elements", element: <FormElement /> },

  /* Pages */
  { path: "/404", element: <Error404 /> },
  { path: "/500", element: <Error500 /> },
  { path: "/503", element: <Error503 /> },

  /* Layouts */
  { path: "/layoutsone", element: <LayoutOne /> },
  { path: "/layoutstwo", element: <LayoutTwo /> },


  /* Support */
  { path: "/chat", element: <Chat /> },
  { path: "/support-tickets", element: <TicketList /> },
  { path: "/support-replay", element: <TicketsReplay /> },

  /* Email */
  { path: "/inbox", element: <Inbox /> },
  { path: "/details", element: <Details /> },

  /* Charts */
  { path: "/charts-line", element: <LineChart /> },
  { path: "/charts-pie", element: <PieChart /> },
  { path: "/charts-bar", element: <BarChart /> },

  /* Maps */
  { path: "/maps", element: <Maps /> },
  { path: "/maps-vector", element: <VectorsMap /> },

  /* Authentication */
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/2fa", element: <TwoFactorAuthentication /> },
  { path: "/reset-password", element: <ResetPassword /> },
];

export { router };