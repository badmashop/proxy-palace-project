
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Globe, Users, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold text-blue-400">Voidix</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-blue-400">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">
            Premium Residential Proxies
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Voidix Proxies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            High-speed residential proxies for professionals who demand reliability. 
            Built for developers, marketers, and data specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-3">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Why Choose Voidix?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional-grade residential proxies with the features you need
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <CardTitle className="text-white">High Anonymity</CardTitle>
              <CardDescription className="text-gray-300">
                Premium residential IPs with 99.9% uptime guarantee
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <CardTitle className="text-white">Lightning Fast</CardTitle>
              <CardDescription className="text-gray-300">
                Ultra-low latency with speeds up to 1Gbps
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <CardTitle className="text-white">Global Coverage</CardTitle>
              <CardDescription className="text-gray-300">
                200+ locations worldwide with premium IP pools
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Transparent Pricing</h2>
          <p className="text-gray-300">Pay with crypto for maximum privacy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Starter</CardTitle>
              <div className="text-3xl font-bold text-blue-400">$29<span className="text-lg text-gray-400">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>• 5GB bandwidth</li>
                <li>• 10 concurrent connections</li>
                <li>• Basic support</li>
                <li>• Crypto payments accepted</li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-blue-600 border-2 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
              Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-white">Professional</CardTitle>
              <div className="text-3xl font-bold text-blue-400">$99<span className="text-lg text-gray-400">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>• 50GB bandwidth</li>
                <li>• 100 concurrent connections</li>
                <li>• Priority support</li>
                <li>• Advanced dashboard</li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Enterprise</CardTitle>
              <div className="text-3xl font-bold text-blue-400">$299<span className="text-lg text-gray-400">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>• 200GB bandwidth</li>
                <li>• Unlimited connections</li>
                <li>• 24/7 dedicated support</li>
                <li>• Custom integrations</li>
              </ul>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
            <div className="text-gray-300">Locations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
            <div className="text-gray-300">IPs Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold text-blue-400">Voidix</span>
              </div>
              <p className="text-gray-400">Premium residential proxies for professionals.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Voidix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
