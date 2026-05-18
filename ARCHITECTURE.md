# 🚀 Peng Logistics Smart Delivery & Tracking Application
**Complete Frontend Architecture & Product Blueprint**

This document outlines the production-grade frontend architecture for the Peng Logistics mobile application, designed to be scalable, performant, and investor-ready. 

## 1. System Architecture & Tech Stack

### Core Frameworks
* **Framework:** React Native with Expo (Managed Workflow with EAS). Provides native performance, easy OTA updates, and simple deployment pipelines.
* **Routing:** Expo Router (File-based routing). Enables superior deep linking, web support (for Admin dashboard), and automatic navigation type safety.
* **Language:** TypeScript (Strict mode). Interface-driven development for predictable data structures.

### Styling & UI
* **Styling Engine:** NativeWind (TailwindCSS for React Native). Allows highly scalable, zero-runtime overhead utility styling.
* **Animations:** Reanimated 3 + React Native Gesture Handler. For 60/120fps UI animations running on the native UI thread.
* **Icons:** Lucide React Native (consistent, scalable vector icons).

### State Management & Data Fetching
* **Server State:** TanStack Query (React Query v5). Handles aggressive caching, optimistic updates, background fetching, and offline-first capabilities.
* **Global Client State:** Zustand. Lightweight, un-opinionated store for authentication, theme, and local app preferences (no Redux boilerplate).
* **Form Management:** React Hook Form + Zod. Performant uncontrolled inputs with strict schema validation.

### Storage & Native Integrations
* **Secure Storage:** Expo SecureStore (Encrypted storage for JWT tokens).
* **KV Storage:** `react-native-mmkv`. Ultra-fast synchronous storage for app preferences and React Query offline cache.
* **Maps:** `react-native-maps` + `expo-location` (Geofencing, live rider tracking, ETA calculations).
* **Notifications:** Firebase Cloud Messaging (FCM) via `expo-notifications`.

---

## 2. Scalable Folder Structure (Feature-Based)

Adopting a **Feature-Sliced Design (FSD)** inspired architecture, heavily adapted for Expo Router to ensure separation of concerns.

```text
/peng-logistics
├── /app                      # Expo Router file-based routing
│   ├── (auth)                # Authentication flow (Login, Register, OTP)
│   ├── (customer)            # Customer role flow group
│   ├── (rider)               # Rider role flow group
│   ├── (admin)               # Admin role flow group
│   ├── _layout.tsx           # Root layout (Providers, Deep Linking, Auth Guards)
│   └── index.tsx             # Entry point (Role routing logic)
├── /src
│   ├── /assets               # Fonts, local images, Lottie JSONs
│   ├── /components           # Global reusable UI components
│   │   ├── /ui               # Primitives (Button, Input, Card, Badge)
│   │   ├── /form             # React Hook Form wrappers
│   │   └── /feedback         # Toast, Modals, Skeleton Loaders
│   ├── /features             # Feature-based modules (THE CORE)
│   │   ├── /tracking         # Parcel tracking feature
│   │   │   ├── components/   # Feature-specific components (e.g., TrackingTimeline)
│   │   │   ├── hooks/        # Feature hooks (e.g., useLiveTracking)
│   │   │   └── types.ts      # Feature domain models
│   │   ├── /delivery         # Delivery management feature (Rider specific)
│   │   └── /auth             # Authentication feature
│   ├── /lib                  # 3rd-party library configurations (Axios, Dayjs, MMKV)
│   ├── /services             # API abstraction layer
│   │   ├── /mock             # Dummy data generators (faker.js)
│   │   └── api.ts            # Axios instance & interceptors
│   ├── /store                # Global Zustand stores (useAuthStore, useAppStore)
│   ├── /theme                # NativeWind tokens, colors, typography configs
│   ├── /types                # Global TypeScript declarations
│   └── /utils                # Helper functions (formatCurrency, calculateDistance)
```

---

## 3. Navigation Architecture

Leveraging Expo Router's Layouts and Groups:

* **Root (`/app/_layout.tsx`)**: Wraps the app with `<QueryClientProvider>`, `<GestureHandlerRootView>`, and global layout boundaries. Handles initial auth state resolution.
* **Auth Guard**: A custom hook `useProtectedRoute` runs in layout files to redirect unauthenticated users to `/login`.
* **Customer Flow (`/app/(customer)/(tabs)`)**:
  * `/home` - Dashboard overview.
  * `/track` - Active tracking map and timeline.
  * `/history` - Past deliveries.
  * `/profile` - Settings and support.
* **Rider Flow (`/app/(rider)/(tabs)`)**:
  * `/map` - Live route map and queue.
  * `/deliveries` - Assigned tasks.
  * `/earnings` - Payouts and history.
* **Admin Flow (`/app/(admin)/(drawer)`)**:
  * Uses a Drawer layout, optimized for larger screens (tablets) for operational management.

---

## 4. Design System & Theme Strategy

**Aesthetic:** Clean, Premium, Minimal. Card-based UI with soft shadows, heavily inspired by modern logistics apps like Uber and Glovo.

**Color Palette:**
* **Primary:** `#0F172A` (Slate 900) - Premium dark tech feel.
* **Accent:** `#F59E0B` (Amber 500) - Action highlight, highly visible on maps.
* **Background:** `#F8FAFC` (Light) / `#020617` (Dark).
* **Surface/Cards:** `#FFFFFF` (Light) / `#0F172A` (Dark).
* **Status Colors:**
  * Success (Delivered): `#10B981` (Emerald 500)
  * Warning (In Transit): `#F59E0B` (Amber 500)
  * Error (Exception): `#EF4444` (Red 500)

**Typography (Google Fonts):**
* **Headings:** `Space Grotesk` (Tech, geometric, distinct).
* **Body/UI:** `Inter` (Highly legible, perfect for data-heavy logistic views).

**Shadows & Radii:**
* **Cards:** Soft, diffuse shadows (`box-shadow: 0px 4px 20px rgba(15, 23, 42, 0.05)`).
* **Border Radius:** Generous rounding (`borderRadius: 16px` for cards, `12px` for buttons).

---

## 5. UI Component Hierarchy

Build generic, polymorphic components to ensure maximum reusability:

1. **Primitives (`/src/components/ui`)**:
   * `<Text variant="h1|h2|body|caption" weight="bold|medium|regular" />`
   * `<Button variant="primary|secondary|outline|ghost" size="lg|md|sm" isLoading />`
   * `<Card variant="elevated|flat|outlined">`
   * `<Input>` (Supports icons, validation states, password toggle)

2. **Logistics Domain Components (`/src/features`)**:
   * `<TrackingTimeline steps={[]} currentStepIndex={number} />`
   * `<StatusBadge status="IN_TRANSIT" />`
   * `<RiderCard rider={Rider} />`
   * `<DeliveryMap origin={LatLng} destination={LatLng} rider={LatLng} />`

---

## 6. State Management & API Abstraction

### The API Layer (`axios` + interceptors)
Centralized instance to handle token injection and response standardization:
```typescript
const api = axios.create({ baseURL: 'https://api.penglogistics.com/v1' });

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

### Server State (TanStack Query)
Abstracting fetches into custom hooks:
```typescript
export const useActiveDeliveries = (riderId: string) => {
  return useQuery({
    queryKey: ['deliveries', 'active', riderId],
    queryFn: () => mockApi.getRiderDeliveries(riderId),
    refetchInterval: 15000, // Background polling for live updates
  });
};
```

### Global Client State (Zustand)
```typescript
interface AuthState {
  user: User | null;
  role: 'CUSTOMER' | 'RIDER' | 'ADMIN' | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthState>((set) => ({...}));
```

---

## 7. UX Recommendations & Animation Strategy

1. **Skeleton Loaders:** Use shimmering skeleton variants (`reanimated` opacity pulses) instead of standard spinners for parcel lists to reduce perceived loading time.
2. **Micro-Interactions:**
   * Buttons scale down slightly on press (`useAnimatedStyle` scale: 0.95).
   * Success actions morph the button into a green checkmark before navigating.
3. **Map Experience (BottomSheet):**
   * Use `@gorhom/bottom-sheet` for delivery details overlapping the map. Users can drag it up/down (Uber style).
   * Rider markers should use `MapMarker` interpolation to glide smoothly between coordinates instead of snapping rigidly.
4. **Haptic Feedback:**
   * Trigger `expo-haptics` (`ImpactFeedbackStyle.Light`) on successful OTP entries, status changes, or slider completions.
5. **Swipe-to-Complete:** For critical Rider actions (e.g., "Confirm Delivery"), use a swipeable slider rather than a button to prevent accidental taps.

---

## 8. Screen & Dashboard Layout Strategy

**Customer Dashboard:**
* **Hero:** Greeting, Profile Avatar, and a prominent "Track your parcel" large input field with a barcode scan icon.
* **Active Deliveries:** Horizontal scrollable cards showing live ETAs, mini-maps, and current status.
* **Recent History:** Vertical list of past deliveries with easy "Reorder/Repeat" actions.

**Rider Dashboard:**
* **Header:** Prominent Online/Offline toggle switch.
* **Top Bar:** Quick stats: Today's Earnings & Completed Trips.
* **Main View:** Map showing the next pickup/drop-off polyline.
* **Bottom Sheet:** Queue of assigned deliveries, prioritizing the next optimal stop.

**Admin Dashboard (Tablet/Web Optimized):**
* **Sidebar:** Fixed navigation.
* **Top:** KPI Cards (Active Riders, Pending Deliveries, Daily Revenue).
* **Body:** Data tables (FlashList) with real-time filtering, search, and status badges. Clicking a row opens a detailed slide-over panel.

---

## 9. Production & Scalability Best Practices

1. **Offline-First:** Implement `@tanstack/react-query-persist-client` with MMKV. Riders in poor network areas can update statuses; the app will sync mutations automatically when the network is restored.
2. **Performance Optimization:**
   * Use Shopify's `FlashList` instead of React Native's `FlatList` for delivery histories to ensure smooth 60fps scrolling on low-end Androids.
   * Memoize heavy components (like the Map and Map Markers) using `React.memo` and `useMemo` to prevent unnecessary re-renders when global state changes.
3. **Image Compression:** Use `expo-image-manipulator` to compress "Proof of Delivery" photos on the client-side *before* uploading to save bandwidth and server storage.
4. **Error Handling:** Implement `@sentry/react-native` for real-time crash reporting. Wrap major UI sections in React Error Boundaries to prevent entire app crashes (show a "Something went wrong" fallback instead).
5. **CI/CD:** Utilize Expo Application Services (EAS). Setup EAS Build and Submit inside GitHub Actions to automate PR checks, staging previews, and production App Store/Play Store deployments.
