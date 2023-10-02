type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="bg-slate-200 p-10 rounded-md">{children}</div>;
}

export default AuthLayout;
