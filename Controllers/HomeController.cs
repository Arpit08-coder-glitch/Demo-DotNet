using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MyMvcProject.Models;

namespace MyMvcProject.Controllers;
public class HomeController : Controller
{
    public IActionResult Index() => View();
}
public class TutorialsController : Controller
{
    public IActionResult Index() => View();
}
public class ExamplesController : Controller
{
    public IActionResult Index() => View();
}
public class QuizzesController : Controller
{
    public IActionResult Index() => View();
}
public class ResourcesController : Controller
{
    public IActionResult Index() => View();
}
public class ContactController : Controller
{
    public IActionResult Index() => View();
}
