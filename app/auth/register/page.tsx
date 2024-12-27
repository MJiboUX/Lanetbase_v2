// ... existing imports ...

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // ... existing form data ...
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData.email, formData.password, 'user', {
        fullName: formData.fullName,
        // ... other form data ...
      });
      
      toast({
        title: 'Success',
        description: 'Account created successfully. Please login.',
      });
      router.push('/auth/login');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create account',
        variant: 'destructive',
      });
    }
  };

  // ... rest of the component
}