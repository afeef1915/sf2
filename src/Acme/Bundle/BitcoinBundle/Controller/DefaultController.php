<?php

namespace Acme\Bundle\BitcoinBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AcmeBitcoinBundle:Default:index.html.twig');
    }
    public function datatableAction()
    {
        return $this->render('AcmeBitcoinBundle:Bitcoin:table.html.twig');
    }
    public function graphAction()
    {
        return $this->render('AcmeBitcoinBundle:Graphs:graphs.html.twig');
    }
}
