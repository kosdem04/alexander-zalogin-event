import { Route, Routes } from "react-router-dom";

import ContactsPage from "../pages/ContactsPage";
import CorporatePage from "../pages/CorporatePage";
import CeremonyPage from "../pages/CeremonyPage";
import GalaPage from "../pages/GalaPage";
import GraduationPage from "../pages/GraduationPage";
import HomePage from "../pages/HomePage";
import MassEventsPage from "../pages/MassEventsPage";
import AnniversaryPage from "../pages/AnniversaryPage";
import WeddingPage from "../pages/WeddingPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weddings" element={<WeddingPage />} />
      <Route path="/corporate" element={<CorporatePage />} />
      <Route path="/anniversaries" element={<AnniversaryPage />} />
      <Route path="/graduations" element={<GraduationPage />} />
      <Route path="/gala-dinners" element={<GalaPage />} />
      <Route path="/ceremony" element={<CeremonyPage />} />
      <Route path="/mass-events" element={<MassEventsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}
